"use client";
import { createContext, useContext, useEffect, useState } from "react";

type UserSession = {
  id: number;
  userId: string;
  email: string;
  name: string;
  surname: string;
  role: string;
};

type SessionContextType = {
  session: UserSession | null;
  signIn: (user: UserSession) => void;
  signOut: () => void;
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<UserSession | null>(null);

  useEffect(() => {
    const storedSession = localStorage.getItem("session");
    if (storedSession) {
      setSession(JSON.parse(storedSession));
    }
  }, []);

  const signIn = (user: UserSession) => {
    localStorage.setItem("session", JSON.stringify(user));
    setSession(user);
  };

  const signOut = () => {
    localStorage.removeItem("session");
    setSession(null);
  };

  console.log(session)

  return (
    <SessionContext.Provider value={{ session, signIn, signOut }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be used within SessionProvider");
  return ctx;
}
