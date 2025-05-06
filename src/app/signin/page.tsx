"use client";

import Link from "next/link";
import { useActionState } from "react";
import { authenticate } from "../actions/auth";

export default function LoginPage() {
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-900 text-white px-4">
      <div className="w-full max-w-md space-y-8 p-8 rounded-2xl bg-zinc-800 shadow-lg border border-zinc-700">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Log in to your account</h1>
          <p className="text-sm text-zinc-400 mt-2">Access your workspace and tools</p>
        </div>

        <form action={formAction} className="space-y-5">
          <input type="hidden" name="redirectTo" value="/dashboard" />

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@domain.com"
              className="w-full rounded-md bg-zinc-700 border border-zinc-600 px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="password" className="block text-sm font-medium text-zinc-300">Password</label>
              <a href="#" className="text-sm text-indigo-400 hover:underline">Forgot?</a>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={8}
              placeholder="••••••••"
              className="w-full rounded-md bg-zinc-700 border border-zinc-600 px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="h-4 w-4 rounded bg-zinc-700 border-zinc-600 text-indigo-500 focus:ring-indigo-500"
            />
            <label htmlFor="remember" className="text-sm text-zinc-300">Remember me</label>
          </div>

          <button
            disabled={isPending}
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-semibold py-3 rounded-md disabled:bg-zinc-600"
          >
            {isPending ? "Signing in..." : "Sign In"}
          </button>

          {errorMessage && (
            <div className="mt-2 rounded-md bg-red-500 bg-opacity-10 p-3 text-sm text-red-400">
              {errorMessage}
            </div>
          )}
        </form>

        <div className="text-center text-sm text-zinc-400 pt-4 border-t border-zinc-700">
          Don't have an account?{" "}
          <Link href="/signup" className="text-indigo-400 hover:underline font-medium">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
