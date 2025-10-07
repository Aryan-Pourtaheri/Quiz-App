import { supabase } from "@/app/lib/supabase-client";

export async function getRoles() {
  const { data, error } = await supabase.rpc("enum_values", {
    enum_type: "app_role",
  });
  if (error) console.error(error);
  return data;
}