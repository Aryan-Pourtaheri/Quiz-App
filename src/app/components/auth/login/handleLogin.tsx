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
    // ✅ Step 1: Get user info
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("id, user_id, email, name, surname, password")
      .eq("email", email)
      .maybeSingle();

    if (userError) {
      console.error("Supabase error:", userError.message);
      return { success: false, error: "Database error" };
    }

    if (!userData) {
      return { success: false, error: "User not found" };
    }

    // ✅ Step 2: Get role info (get both id and role)
    const { data: roleData, error: roleError } = await supabase
      .from("user_roles")
      .select("id, role")
      .eq("user_id", userData.user_id)
      .maybeSingle();

    if (roleError) {
      console.error("Role fetch error:", roleError.message);
    }

    // ✅ Step 3: Validate password
    const isValid = await bcrypt.compare(password, userData.password);

    if (!isValid) {
      return { success: false, error: "Incorrect password" };
    }

    // ✅ Step 4: Create user session (include role_id and role)
    const { password: _, ...userWithoutPassword } = userData;

    const userSession = {
      ...userWithoutPassword,
      role_id: roleData?.id || null,
      role: roleData?.role || "user",
    };

    signIn(userSession);
    resetForm();

    return { success: true };
  } catch (err) {
    console.error("Login error:", err);
    return { success: false, error: "An unexpected error occurred" };
  }
};
