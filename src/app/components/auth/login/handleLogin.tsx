import { supabase } from '@/app/lib/supabase-client';
import { UserType } from './page';
import { redirect } from 'next/navigation';

export const handleLoginSubmit = async (
  e: React.FormEvent,
  user: UserType,
  resetForm: () => void
): Promise<{ success: boolean; error?: string }> => {
  e.preventDefault();


  const { data, error } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: user.password,
  });

  console.log("User:", user);

  if (error) {
    console.log("DATA:", data);
    console.log("ERROR:", error);
    return { success: false, error: error.message };
  } else {
    resetForm();
    redirect('/')
  }
};
