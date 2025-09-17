import { supabase } from "@/app/lib/supabase-client";
import { FormEvent } from "react";
import { NewUserType } from "./newUserContext";

export const HandleSignupSubmit = (e: FormEvent<HTMLFormElement>, newUser: NewUserType, resetUser: { (): void; (): void; }) => {

  console.log(newUser);
  
  async function handleSubmit () {
    e.preventDefault();
    const {error} = await supabase.from("users").insert(newUser).single();
    if (error) {
      console.log("Error signing up: " , error.message);
    } else {
      resetUser();
    }
  }

  return handleSubmit();

}