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

  const { data, error } = await supabase
    .from("users")
    .select("id, userId, email, name, surname, role, password")
    .eq("email", email)
    .single();

  if (error || !data) {
    return { success: false, error: "Invalid email or password" };
  }

  const isValid = await bcrypt.compare(password, data.password);
  if (!isValid) {
    return { success: false, error: "Invalid email or password" };
  }

  const { password: _, ...userSession } = data;

  signIn(userSession);

  resetForm();
  return { success: true };
};
