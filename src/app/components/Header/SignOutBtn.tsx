"use client";

import { useSession } from "../SessionContext";

export default function SignOutButton() {
  const { session, signOut } = useSession();

  if (!session) return null; // hide if not logged in

  return (
    <button
      onClick={signOut}
      className="px-4 py-2 bg-[var(--signout-btn)] text-white rounded-lg transition cursor-pointer"
    >
      Sign Out
    </button>
  );
}
