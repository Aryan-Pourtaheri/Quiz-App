import { supabase } from '@/app/lib/supabase-client';
import React from 'react'

export const handleLoginSubmit = async (e: React.FormEvent, user, resetForm) => {
  e.preventDefault();
  const {error} = await supabase.from("users").select("*").order("created_at", {ascending: true});
  if (error) {
    console.log("Error signing up: ", error.message);
  } else if (user.email === "" || user.password === "") {
    resetForm();
  }
}
