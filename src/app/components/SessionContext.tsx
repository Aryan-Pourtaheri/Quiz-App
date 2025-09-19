"use client";

import { useContext, useEffect, useState, createContext, ReactNode } from "react";
import { supabase } from "../lib/supabase-client";
import type { Session } from "@supabase/supabase-js";

interface SessionContextType {
  session: Session | null;
  setSession: React.Dispatch<React.SetStateAction<Session | null>>;
}

// Create context
export const SessionContext = createContext<SessionContextType | undefined>(undefined);

// Provider component
export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };
    fetchSession();

    // Listen to auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};

// Custom hook
export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};
