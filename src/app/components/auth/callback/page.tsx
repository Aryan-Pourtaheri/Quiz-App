"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabase-client";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN" && session) {
          router.push("/"); // redirect after sign-in
        }
      }
    );

    // Clean up subscription when component unmounts
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  return <p className="text-center mt-20">🔄 Finishing sign-in...</p>;
}
