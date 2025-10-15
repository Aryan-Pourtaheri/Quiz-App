import { supabase } from "@/app/lib/supabase-client";
import { UserType } from "@/app/lib/Types";
import bcrypt from "bcryptjs";

export const handleLoginSubmit = async (
  e: React.FormEvent,
  user: UserType,
  resetForm: () => void,
  signIn: (user: any) => void
): Promise<{ success: boolean; error?: string }> => {
  e.preventDefault();

  const { email, password } = user;

  if (!email || !password) {
    return { success: false, error: "Email and password are required" };
  }

  try {
    const { data, error } = await supabase
      .from("users")
      .select("id, email, name, surname, password, role")
      .eq("email", email)
      .maybeSingle(); // ← safer than .single()
      
    if (error) {
      console.error("Supabase error:", error.message);
      return { success: false, error: "Database error" };
    }

    if (!data) {
      return { success: false, error: "User not found" };
    }

    const isValid = await bcrypt.compare(password, data.password);

    if (!isValid) {
      return { success: false, error: "Incorrect password" };
    }

    const { password: _, ...userSession } = data;

    signIn(userSession);
    resetForm();

    return { success: true };
  } catch (err) {
    console.error("Login error:", err);
    return { success: false, error: "An unexpected error occurred" };
  }
};
