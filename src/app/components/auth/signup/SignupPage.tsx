'use client';
import { useState, useContext } from "react";

import Link from "next/link";
import { UserContext } from "./newUserContext";
import { HandleSignupSubmit } from "./HandleSignup";
import AuthLayout from "../AuthLayout";

export default function SignupPage() {
  const ctx = useContext(UserContext);
  if (!ctx) return <p className="text-red-500 text-center mt-20">⚠️ No UserContext provider found</p>;
  const { newUser, setNewUser } = ctx;
  const [message, setMessage] = useState<{ text: string; success?: boolean } | null>(null);

  const changeUserData = (e: React.ChangeEvent<HTMLInputElement>) => setNewUser(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const checkPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = (document.querySelector('input[name="password"]') as HTMLInputElement)?.value || "";
    if (e.target.value !== password) e.target.setCustomValidity("Passwords do not match");
    else {
      e.target.setCustomValidity("");
      setNewUser(prev => ({ ...prev, password }));
    }
  };

  const resetUser = () => setNewUser({ name: "", surname: "", email: "", DateOfBirth: "", password: "" });

  return (
    <AuthLayout type="signup">
      <h2 className="text-3xl font-bold mb-6 text-[#1e293b]">Sign Up</h2>
      <form onSubmit={e => HandleSignupSubmit(e, newUser, resetUser, setMessage)} className="w-full flex flex-col gap-4">
        <input name="name" type="text" placeholder="Name" value={newUser.name} onChange={changeUserData} className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" required />
        <input name="surname" type="text" placeholder="Surname" value={newUser.surname} onChange={changeUserData} className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" required />
        <input name="email" type="email" placeholder="Email" value={newUser.email} onChange={changeUserData} className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" required />
        <input name="DateOfBirth" type="date" placeholder="Date of Birth" value={newUser.DateOfBirth} onChange={changeUserData} className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" required />
        <input name="password" type="password" placeholder="Password" className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" required />
        <input type="password" placeholder="Confirm Password" onChange={checkPassword} className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" required />
        <button type="submit" className="w-full py-3 rounded bg-[#fbbf24] text-[#1e293b] font-bold hover:bg-yellow-400 transition">
          Sign Up
        </button>
      </form>
      {message && <p className={`mt-2 text-center text-sm ${message.success ? "text-green-600" : "text-red-600"}`}>{message.text}</p>}
      <p className="mt-4 text-sm text-gray-700">
        Already have an account? <Link href="/auth/login" className="text-[#3b82f6] font-semibold hover:underline">Login</Link>
      </p>
    </AuthLayout>
  );
}
