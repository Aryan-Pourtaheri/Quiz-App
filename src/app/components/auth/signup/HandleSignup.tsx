import { supabase } from "@/app/lib/supabase-client";
import { NewUserType } from "./newUserContext";
import { FormEvent } from "react";

export const HandleSignupSubmit = async (
  e: FormEvent<HTMLFormElement>,
  newUser: NewUserType,
  resetUser: () => void,
  setMessage: (text: string, success?: boolean) => void
) => {
  e.preventDefault();

  const { error } = await supabase.auth.signUp(newUser);

  if (error) {
    setMessage(`❌ ${error.message}`, false); // false = error
  } else {
    setMessage("✅ Sign up successful! Check your email to confirm.", true); // true = success
    resetUser();
  }
};
