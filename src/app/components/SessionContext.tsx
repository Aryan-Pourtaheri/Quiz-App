import { useEffect, useState } from "react";
import { createContext } from "vm"
import { supabase } from "../lib/supabase-client";

export const SessionContext = createContext(undefined);

export const Your_Session = () => {
  const [session, setsession] = useState<any>(null);

  const fetchSession = async () => { 
    const currentSession = await supabase.auth.getSession()
    setsession(currentSession.data);
  }
  useEffect(() => {
    fetchSession();
  }, []);
} 