"use client";
import { useSession } from "./SessionContext";

export default function SessionWrapper({ children }: { children: React.ReactNode }) {
  const { session } = useSession();

  // if (loading) return <p className="text-center mt-20 text-gray-500">Loading session...</p>;

  // Optional: block access if not logged in
  if (!session) {
    return (
      <>
        <p className="text-center text-red-500 mt-20">Not logged in. Please sign in first.</p>;
        {children}
      </>
    )
  }

  return <>{children}</>;
}
