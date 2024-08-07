"use client"
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

interface SignUpFormData {
  email: string;
  password: string;
}

const SignUpPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpFormData>();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordTyping, setPasswordTyping] = useState(false);

  const password = watch("password");

  const passwordCriteria = {
    length: password ? password.length : 0,
    uppercase: password ? /[A-Z]/.test(password) : false,
    lowercase: password ? /[a-z]/.test(password) : false,
    number: password ? /\d/.test(password) : false,
    specialChar: password ? /[!"#$%&()*,.:<>?@^{|}]/.test(password) : false,
  };

  const allCriteriaMet = Object.values(passwordCriteria).every(Boolean);

  useEffect(() => {
    setPasswordTyping(password?.length > 0 || false);
  }, [password]);

  const onSubmit = () => {
    setSubmitSuccess(true);
    window.location.href = "/setup-profile";
  };

  return (
      <div className="mt-16 w-96 rounded-[16px] bg-[#FFFF] p-6 lg:w-[600px]">
        <div className="mb-4 flex justify-center rounded-[62px] border p-[4px]">
          <button
            className={`w-1/2 rounded-[61px] px-4 py-2 text-center ${isSignUp ? "bg-neutral-30" : ""}`}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </button>
          <Link href="/signin"
            className={`w-1/2 rounded-[61px] px-4 py-2 text-center ${isSignUp ? "" : "bg-neutral-30"}`}
            onClick={() => setIsSignUp(false)}
          >
            Sign In
            </Link>
          
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[16px] text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="johndoe@gmail.com"
              {...register("email", { required: "Email is required" })}
              className="h-[52px] w-full rounded-[10px] border px-3 py-2 outline-none"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-critical-120">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="block text-[16px] text-gray-700"
            >
              Password
            </label>
            <div className="relative w-full">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&()*,.:<>?@^{|}]).{8,}$/,
                    message: "Password did not meet criteria",
                  },
                })}
                className="h-[52px] w-full rounded-[10px] border px-3 pt-2 outline-none"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-critical-120">
                {errors.password.message}
              </p>
            )}
            {passwordTyping && !allCriteriaMet && (
              <ul className="mt-2 text-sm">
                <li
                  className={`flex items-center ${passwordCriteria.length >= 8 ? "text-green-500" : "text-critical-120"}`}
                >
                  {passwordCriteria.length >= 8 ? "✔" : "✘"} At least 8
                  characters
                </li>
                <li
                  className={`flex items-center ${passwordCriteria.uppercase ? "text-green-500" : "text-critical-120"}`}
                >
                  {passwordCriteria.uppercase ? "✔" : "✘"} One uppercase letter
                </li>
                <li
                  className={`flex items-center ${passwordCriteria.lowercase ? "text-green-500" : "text-critical-120"}`}
                >
                  {passwordCriteria.lowercase ? "✔" : "✘"} One lowercase letter
                </li>
                <li
                  className={`flex items-center ${passwordCriteria.number ? "text-green-500" : "text-critical-120"}`}
                >
                  {passwordCriteria.number ? "✔" : "✘"} One number
                </li>
                <li
                  className={`flex items-center ${passwordCriteria.specialChar ? "text-green-500" : "text-critical-120"}`}
                >
                  {passwordCriteria.specialChar ? "✔" : "✘"} One special
                  character
                </li>
              </ul>
            )}
          </div>
          <button
            type="submit"
            className="h-[56px] w-full rounded-[59px] bg-primary-100 px-4 py-2 text-[#FFFF] hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:ring-opacity-50"
          >
            Create Account
          </button>
          {submitSuccess && (
            <p className="mt-1 text-sm text-green-500">
              Account created successfully!
            </p>
          )}
        </form>
        <div className="mt-4 flex items-center justify-center">
          <span className="text-gray-500">OR</span>
        </div>
        <button className="mt-4 flex h-[56px] w-full items-center justify-center gap-2 rounded-[59px] bg-secondary-120 px-4 py-2 text-secondary-10 hover:bg-secondary-110 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50">
          <Image src="/signup/googleicon.png" alt="" width={20} height={20} />{" "}
          <p>Continue with Google</p>
        </button>
      </div>
  );
};

export default SignUpPage;
