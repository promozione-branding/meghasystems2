
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
    LockKeyhole,
    Mail,
    Eye,
    EyeOff,
    ArrowRight,
    Loader2,
    ShieldCheck,
} from "lucide-react";

export default function AdminLoginPage() {
    const router = useRouter();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "same-origin",
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                setError(data.message || "Login failed");
                return;
            }

            router.replace("/admin");
            router.refresh();
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#F8F8F7] flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-[440px]">
                {/* Brand */}
                <div className="text-center mb-9">
                    {/* <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#DF7539] text-white shadow-lg shadow-orange-200/60">
                        <ShieldCheck size={32} strokeWidth={1.7} />
                    </div> */}

                    <h1 className="text-3xl font-bold tracking-tight text-[#121212]">
                        Cubiloo
                        <span className="text-[#DF7539]"> Cubicles</span>
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Admin Management Portal
                    </p>
                </div>

                {/* Login Card */}
                <div className="rounded-3xl border border-gray-100 bg-white p-7 sm:p-9 shadow-[0_15px_60px_rgba(0,0,0,0.05)]">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-[#121212]">
                            Welcome back
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Sign in to manage your website content.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-semibold text-gray-700"
                            >
                                Email Address
                            </label>

                            <div className="relative">
                                <Mail
                                    size={19}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    autoComplete="username"
                                    placeholder="Enter admin email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="h-13 w-full rounded-xl border border-gray-200 bg-[#FAFAFA] py-3.5 pl-12 pr-4 text-sm text-gray-900 outline-none transition focus:border-[#DF7539] focus:ring-4 focus:ring-[#DF7539]/10"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-semibold text-gray-700"
                            >
                                Password
                            </label>

                            <div className="relative">
                                <LockKeyhole
                                    size={19}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    autoComplete="current-password"
                                    placeholder="Enter your password"
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-xl border border-gray-200 bg-[#FAFAFA] py-3.5 pl-12 pr-12 text-sm text-gray-900 outline-none transition focus:border-[#DF7539] focus:ring-4 focus:ring-[#DF7539]/10"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={
                                        showPassword
                                            ? "Hide password"
                                            : "Show password"
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                                >
                                    {showPassword ? (
                                        <EyeOff size={19} />
                                    ) : (
                                        <Eye size={19} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Error */}
                        {error && (
                            <div
                                role="alert"
                                className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600"
                            >
                                {error}
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#DF7539] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#C9652E] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? (
                                <>
                                    <Loader2 size={19} className="animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight size={19} />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <p className="mt-7 text-center text-xs text-gray-400">
                    © {new Date().getFullYear()} Cubiloo Cubicles.
                    All rights reserved.
                </p>
            </div>
        </main>
    );
}
