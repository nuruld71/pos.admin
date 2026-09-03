"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 600);
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-slate-900">Create your account</h1>
      <p className="mt-2 text-sm text-slate-500">
        Set up your business account to get started with POS Admin.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="first-name">First name</Label>
            <Input id="first-name" placeholder="John" required />
          </div>
          <div>
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" placeholder="Doe" required />
          </div>
        </div>

        <div>
          <Label htmlFor="business">Business name</Label>
          <Input id="business" placeholder="Acme Store" required />
        </div>

        <div>
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            required
            autoComplete="email"
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="At least 8 characters"
              required
              minLength={8}
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div>
          <Label htmlFor="confirm">Confirm password</Label>
          <div className="relative">
            <Input
              id="confirm"
              type={showConfirm ? "text" : "password"}
              placeholder="Re-enter password"
              required
              minLength={8}
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              aria-label={showConfirm ? "Hide password" : "Show password"}
            >
              {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <label className="flex items-start gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
            required
          />
          <span>
            I agree to the{" "}
            <span className="font-medium text-indigo-600">Terms of Service</span> and{" "}
            <span className="font-medium text-indigo-600">Privacy Policy</span>.
          </span>
        </label>

        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          ) : (
            <UserPlus className="h-4 w-4" />
          )}
          {loading ? "Creating account..." : "Create account"}
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-indigo-600 hover:text-indigo-700"
        >
          Sign in
        </Link>
      </p>
    </>
  );
}
