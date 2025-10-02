import { supabase } from "@/app/lib/supabase-client";
import { NewUserType } from "@/app/lib/Types";
import { FormEvent } from "react";
import bcrypt from "bcryptjs";

export const HandleSignupSubmit = async (
  e: FormEvent<HTMLFormElement>,
  newUser: NewUserType,
  resetUser: () => void,
  setMessage: (text: string, success?: boolean) => void
) => {
  e.preventDefault();

  const { email, password, name, surname, DateOfBirth } = newUser;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const { error } = await supabase
      .from("users")
      .insert({
        email,
        password: hashedPassword,
        name,
        surname,
        DateOfBirth,
      });

    if (error) {
      setMessage(`❌ ${error.message}`, false);
    } else {
      setMessage("✅ Sign up successful!", true);
      resetUser();
    }
  } catch (err) {
    setMessage("❌ Error hashing password", false);
  }
};
