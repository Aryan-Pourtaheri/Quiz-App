import { supabase } from "@/app/lib/supabase-client";
import bcrypt from "bcryptjs";
import { NewUserType } from "@/app/lib/Types";
import { app_role } from "./RoleContext";

export const HandleSignupSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  newUser: NewUserType,
  resetUser: () => void,
  setMessage: (text: string, success?: boolean) => void,
  role: app_role
) => {
  e.preventDefault();

  if (!role) {
    setMessage("❌ Please select a role before signing up.", false);
    return;
  }

  const { email, password, name, surname, DateOfBirth } = newUser;

  try {
    // 1️⃣ Create user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });
    if (authError || !authData?.user) {
      setMessage(`❌ ${authError?.message || "Auth signup failed"}`, false);
      return;
    }
    const user_id = authData.user.id;

    // 2️⃣ Insert user details first
    const { data: userInsertData, error: userError } = await supabase
      .from("users")
      .insert({
        user_id,
        name,
        surname,
        DateOfBirth,
        email,
        password: await bcrypt.hash(password, 10),
      })
      .select("id")
      .single();

    if (userError || !userInsertData) {
      setMessage(`❌ Failed to create user: ${userError?.message}`, false);
      return;
    }

    // 3️⃣ Now insert role referencing the existing user
    const { data: roleInsertData, error: roleInsertError } = await supabase
      .from("user_roles")
      .insert({
        user_id,
        role,
      })
      .select("id")
      .single();

    if (roleInsertError || !roleInsertData) {
      setMessage(`❌ Failed to assign role: ${roleInsertError?.message}`, false);
      return;
    }

    // 4️⃣ Optionally update user record to attach user_role_id
    const { error: updateError } = await supabase
      .from("users")
      .update({ user_role_id: roleInsertData.id })
      .eq("user_id", user_id);

    if (updateError) {
      setMessage(`❌ Failed to link role: ${updateError.message}`, false);
      return;
    }

    setMessage("✅ Signup successful!", true);
    resetUser();

  } catch (err) {
    console.error("Unexpected signup error:", err);
    setMessage("❌ Unexpected error during signup", false);
  }
};
