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
    // 1️⃣ Sign up via Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError || !authData?.user) {
      setMessage(`❌ ${authError?.message || "Auth signup failed"}`, false);
      return;
    }

    const user_id = authData.user.id;

    // 2️⃣ Insert into `users` first
    const { data: userData, error: userError } = await supabase
      .from("users")
      .insert({
        user_id,
        name,
        surname,
        DateOfBirth,
        email,
        password: await bcrypt.hash(password, 10),
      })
      .select("user_id")
      .single();

    if (userError) {
      setMessage(`❌ Failed to create user: ${userError.message}`, false);
      return;
    }

    // 3️⃣ Now the user exists in `public.users`, so this works:
    const { data: roleData, error: roleError } = await supabase
      .from("user_roles")
      .insert({
        user_id, // ✅ now valid
        role,
      })
      .select("id")
      .single();

    if (roleError) {
      setMessage(`❌ Failed to assign role: ${roleError.message}`, false);
      return;
    }

    setMessage("✅ Signup successful!", true);
    resetUser();


  } catch (err) {
    console.error(err);
    setMessage("❌ Unexpected error during signup", false);
  }

};
