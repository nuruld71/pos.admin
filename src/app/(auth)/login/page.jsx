"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
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
      <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>
      <p className="mt-2 text-sm text-slate-500">
        Sign in to your account to continue to the control panel.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
          <div className="mb-1.5 flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              required
              autoComplete="current-password"
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

        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
          />
          Remember me
        </label>

        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          ) : (
            <LogIn className="h-4 w-4" />
          )}
          {loading ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      <div className="mt-6 flex items-center gap-3 text-xs text-slate-400">
        <div className="h-px flex-1 bg-slate-200" />
        OR
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <Button type="button" variant="outline" className="w-full">
          Google
        </Button>
        <Button type="button" variant="outline" className="w-full">
          Apple
        </Button>
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-indigo-600 hover:text-indigo-700"
        >
          Create one
        </Link>
      </p>
    </>
  );
}
