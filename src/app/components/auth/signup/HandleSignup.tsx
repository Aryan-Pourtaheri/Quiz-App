import { supabase } from "@/app/lib/supabase-client";
import bcrypt from "bcryptjs";
import { NewUserType } from "@/app/lib/Types";
import { RoleType } from "./RoleContext";

export const HandleSignupSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  newUser: NewUserType,
  resetUser: () => void,
  setMessage: (text: string, success?: boolean) => void,
  role: RoleType
) => {
  e.preventDefault();

  if (!role) {
    setMessage("❌ Please select a role before signing up.", false);
    return;
  }

  const { email, password, name, surname, DateOfBirth } = newUser;

  try {
    // Create user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError || !authData?.user) {
      setMessage(`❌ ${authError?.message || "Auth signup failed"}`, false);
      return;
    }

    const user_id = authData.user.id;

    // Add extra user info to 'users' table
    const { error: userError } = await supabase.from("users").insert({
      user_id,
      name,
      surname,
      DateOfBirth,
      email,
      password: await bcrypt.hash(password, 10),
    });

    if (userError) {
      console.error("User insert error:", userError);
      setMessage(`❌ ${userError.message}`, false);
      return;
    }

    // Assign role
    const { data: roleData,error: roleError } = await supabase.from("user_roles").insert({
      user_id,
      role
    });

    if (roleError) {
      console.log("Role data:", roleData);
      console.error("Role insert error:", roleError);
      setMessage(`❌ ${roleError.message}`, false);
      return;
    }

    setMessage("✅ Signup successful!", true);
    resetUser();

  } catch (err) {
    console.error(err);
    setMessage("❌ Unexpected error during signup", false);
  }
};
