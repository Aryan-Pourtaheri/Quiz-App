"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabase-client";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        router.push("/"); // redirect where you want
      }
    });
  }, [router]);

  return <p className="text-center mt-20">🔄 Finishing sign-in...</p>;
}
