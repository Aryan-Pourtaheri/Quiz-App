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
    // 1️⃣ Sign up the user via auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });
    if (authError || !authData?.user) {
      setMessage(`❌ ${authError?.message || "Auth signup failed"}`, false);
      return;
    }

    const user_id = authData.user.id;

    // 2️⃣ Create user record (no role_id yet)
    const { error: userError } = await supabase.from("users").insert({
      user_id,
      name,
      surname,
      DateOfBirth,
      email,
      password: await bcrypt.hash(password, 10),
      user_role_id: null,
    });
    if (userError) {
      setMessage(`❌ Failed to create user: ${userError.message}`, false);
      return;
    }

    // 3️⃣ Create user role linked to that user
    const { data: roleData, error: roleError } = await supabase
      .from("user_roles")
      .insert({ user_id, role })
      .select("id")
      .single();

    if (roleError) {
      setMessage(`❌ Failed to assign role: ${roleError.message}`, false);
      return;
    }

    // 4️⃣ Update the user with the new role ID
    const { error: updateError } = await supabase
      .from("users")
      .update({ user_role_id: roleData.id })
      .eq("user_id", user_id);

    if (updateError) {
      setMessage(`⚠️ Failed to update user with role: ${updateError.message}`, false);
      return;
    }

    setMessage("✅ Signup successful!", true);
    resetUser();

  } catch (err) {
    console.error("Unexpected signup error:", err);
    setMessage("❌ Unexpected error during signup", false);
  }
};
