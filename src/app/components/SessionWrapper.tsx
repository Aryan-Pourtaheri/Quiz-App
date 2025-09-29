"use client";
import { useSession } from "./SessionContext";

export default function SessionWrapper({ children }: { children: React.ReactNode }) {
  const session = useSession();

  console.log(session);

  return <>{children}</>;
}
