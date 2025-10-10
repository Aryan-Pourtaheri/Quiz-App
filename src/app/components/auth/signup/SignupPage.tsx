'use client';
import { useState, useContext, useEffect } from "react";

import Link from "next/link";
import { UserContext } from "./newUserContext";
import { HandleSignupSubmit } from "./HandleSignup";
import AuthLayout from "../AuthLayout";
import {RoleContext} from "./RoleContext";

function SignupPage() {
  const userctx = useContext(UserContext);
  const rolectx = useContext(RoleContext);

  // Safety check
  if (!userctx) return <p className="text-red-500 text-center mt-20">⚠️ No UserContext provider found</p>;
  if (!rolectx) return <p className="text-red-500 text-center mt-20">⚠️ No RoleContext provider found</p>;

  const {role, setRole} = rolectx;

  const handleSelect = (selectedRole: 'student' | 'teacher') => {
    setRole(selectedRole);
  };

  const [message, setMessage] = useState<{ text: string; success?: boolean } | null>(null);

  const [password, setPassword] = useState("");
  
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => setMessage(null), 5000);
      return () => clearTimeout(timeout);
    }
  }, [message]);

  // If context is missing, just show a message (after hooks)
  if (!userctx) {
    return <p className="text-red-500 text-center mt-20">⚠️ No UserContext provider found</p>;
  }

  const { newUser, setNewUser } = userctx;

  const changeUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPwd = e.target.value;
    setConfirmPassword(confirmPwd);

    if (confirmPwd !== password) {
      e.target.setCustomValidity("Passwords do not match");
    } else {
      e.target.setCustomValidity("");
      setNewUser(prev => ({ ...prev, password }));
    }
  };

  const resetUser = () => {
    setNewUser({
      name: "",
      surname: "",
      email: "",
      DateOfBirth: "",
      password: ""
    });
  };


  const showMessage = (text: string, success?: boolean) => {
    setMessage({ text, success });
  };

  return (
    <AuthLayout type="signup">
      <h2 className="text-3xl font-bold mb-6 text-[var(--text-color)]">Sign Up</h2>
      <form
        onSubmit={e => HandleSignupSubmit(e, newUser, resetUser, showMessage, role)}
        className="w-full flex flex-col gap-4"
      >
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={changeUserData}
          className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
          required
        />

        <input
          name="surname"
          type="text"
          placeholder="Surname"
          value={newUser.surname}
          onChange={changeUserData}
          className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={changeUserData}
          className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
          required
        />

        <input
          name="DateOfBirth"
          type="date"
          placeholder="Date of Birth"
          value={newUser.DateOfBirth}
          onChange={changeUserData}
          className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
          required
        />

      <div className="flex gap-6 align-middle justify-center my-4 text-white">
        <button
          onClick={() => handleSelect('student')}
          className={`px-8 py-3 rounded-2xl text-lg font-semibold border transition-all
            ${role === 'student'
              ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-500/30 text-white'
              : 'bg-gray-800 text-gray-200 hover:text-white hover:bg-gray-700'}
          `}
        >
          Student
        </button>

        <button
          onClick={() => handleSelect('teacher')}
          className={`px-8 py-3 rounded-2xl text-lg font-semibold border transition-all
            ${role === 'teacher'
              ? 'bg-green-600 border-green-600 shadow-lg shadow-green-500/30 text-white'
              : 'bg-gray-800 text-gray-200 hover:text-white hover:bg-gray-700'}
          `}
        >
          Teacher
        </button>
      </div>


        <button
          type="submit"
          className="w-full py-3 rounded bg-[#fbbf24] text-[#1e293b] font-bold hover:bg-yellow-400 transition"
        >
          Sign Up
        </button>
      </form>

      {message && (
        <p
          className={`mt-2 text-center text-sm ${
            message.success ? "text-green-600" : "text-red-600"
          }`}
        >
          {message.text}
        </p>
      )}

      <p className="mt-4 text-sm text-gray-700">
        Already have an account?{" "}
        <Link href="/components/auth/login" className="text-[#3b82f6] font-semibold hover:underline">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}

export default SignupPage;