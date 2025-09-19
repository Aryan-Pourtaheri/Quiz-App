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

  const { email, password, name, surname, DateOfBirth } = newUser;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        surname,
        DateOfBirth,
      },
      emailRedirectTo: `${window.location.origin}/auth/callback`, // optional but recommended
    },
  });

  if (error) {
    setMessage(`❌ ${error.message}`, false);
  } else {
    setMessage("✅ Sign up successful! Check your email to confirm.", true);
    resetUser();
  }
};
