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
    // 1️⃣ Sign up in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError || !authData?.user) {
      setMessage(`❌ ${authError?.message || "Auth signup failed"}`, false);
      return;
    }

    const user_id = authData.user.id;

    // 2️⃣ Create a role entry first
    const { data: roleData, error: roleError } = await supabase
      .from("user_roles")
      .insert({ user_id, role })
      .select("id")
      .single();

    if (roleError || !roleData) {
      setMessage(`❌ Failed to assign role: ${roleError?.message}`, false);
      return;
    }

    console.log(roleData);

    // 3️⃣ Insert user info with the correct foreign key
    const hashedPassword = await bcrypt.hash(password, 10);

    const { error: userError } = await supabase.from("users").insert({
      user_id,
      name,
      surname,
      DateOfBirth,
      email,
      password: hashedPassword,
      user_role_id: roleData.id, // ✅ role ID exists now
    });

    if (userError) {
      setMessage(`❌ Failed to create user: ${userError.message}`, false);
      return;
    }

    setMessage("✅ Signup successful!", true);
    resetUser();

  } catch (err) {
    console.error("Unexpected signup error:", err);
    setMessage("❌ Unexpected error during signup", false);
  }
};
