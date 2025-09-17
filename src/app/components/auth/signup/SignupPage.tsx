'use client';
import Link from "next/link";
import { useContext } from "react";
import { HandleSignupSubmit } from "./HandleSignup";
import { UserContext } from "./newUserContext";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-[#1e293b] shadow-md fixed top-0 left-0 z-10">
      <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-[#fbbf24]">
        <span>Quiz System</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/components/auth/login" className="px-4 py-2 rounded bg-[#fbbf24] text-[#1e293b] font-medium hover:bg-yellow-400 transition">Login</Link>
      </div>
    </nav>
  );
}

export default function SignupPage() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    return <p className="text-red-500 text-center mt-20">⚠️ No UserContext provider found</p>;
  }

  const { newUser, setNewUser } = ctx;

  const changeUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const CheckPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = (document.querySelector('input[name="password"]') as HTMLInputElement)?.value || "";
    if (e.target.value !== password) {
      e.target.setCustomValidity("Passwords do not match");
    } else {
      e.target.setCustomValidity("");
      setNewUser((prev) => ({ ...prev, password }));
    }
  };

  const resetUser = () => {
    setNewUser({ name: "", surname: "", email: "", DateOfBirth: "", password: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e293b] via-[#3b82f6] to-[#fbbf24] flex flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center pt-32 pb-16 px-4">
        <div className="bg-white/90 rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-[#1e293b]">Sign Up</h2>
          <form
            onSubmit={(e) => HandleSignupSubmit(e, newUser, resetUser)}
            className="w-full flex flex-col gap-4 text-black"
          >
            <input name="name" type="text" placeholder="Name" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" onChange={changeUserData} value={newUser.name} required/>
            <input name="surname" type="text" placeholder="Surname" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" onChange={changeUserData} value={newUser.surname} required/>
            <input name="email" type="email" placeholder="Email" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" onChange={changeUserData} value={newUser.email} required/>
            <input name="DateOfBirth" type="date" placeholder="Date of Birth" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" onChange={changeUserData} value={newUser.DateOfBirth} required/>
            <input name="password" type="password" placeholder="Password" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" required/>
            <input type="password" placeholder="Confirm Password" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" onChange={CheckPassword} required/>
            <button type="submit" className="w-full py-2 rounded bg-[#fbbf24] text-[#1e293b] font-bold hover:bg-yellow-400 transition">Sign Up</button>
          </form>
          <p className="mt-4 text-sm text-gray-700">
            Already have an account? <Link href="/components/auth/login" className="text-[#3b82f6] font-semibold hover:underline"> Login</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
