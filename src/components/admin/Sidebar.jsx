
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard,
    FileText,
    PlusCircle,
    LogOut,
    Menu,
    X,
    ChevronRight,
    PanelLeftClose,
    PanelLeftOpen,
} from "lucide-react";

const menuItems = [
    {
        name: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
    },
    {
        name: "All Blogs",
        href: "/admin/blogs",
        icon: FileText,
    },
    {
        name: "Add Blog",
        href: "/admin/blogs/add",
        icon: PlusCircle,
    },
];

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [loggingOut, setLoggingOut] = useState(false);

    const handleLogout = async () => {
        if (loggingOut) return;

        setLoggingOut(true);

        try {
            const response = await fetch("/api/admin/logout", {
                method: "POST",
                credentials: "same-origin",
            });

            if (!response.ok) {
                throw new Error("Logout failed");
            }

            router.replace("/admin/login");
            router.refresh();
        } catch (error) {
            console.error("Logout Error:", error);
            alert("Unable to log out. Please try again.");
        } finally {
            setLoggingOut(false);
        }
    };

    return (
        <>
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-40 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-5">
                <Link
                    href="/admin/dashboard"
                    className="font-bold text-xl text-[#121212]"
                >
                    Cubiloo
                </Link>

                <button
                    onClick={() => setMobileOpen(true)}
                    aria-label="Open sidebar"
                    className="p-2 rounded-lg bg-gray-100 text-gray-800"
                >
                    <Menu size={23} />
                </button>
            </div>

            {/* Mobile Overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed top-0 left-0 h-screen z-50
                    bg-[#121212] text-white
                    flex flex-col
                    transition-all duration-300
                    ${collapsed ? "lg:w-[85px]" : "lg:w-[260px]"}
                    w-[260px]
                    ${mobileOpen
                        ? "translate-x-0"
                        : "-translate-x-full lg:translate-x-0"}
                `}
            >
                {/* Logo */}
                <div className="h-20 flex items-center justify-between px-6 border-b border-white/10">
                    {(!collapsed || mobileOpen) && (
                        <Link
                            href="/admin/dashboard"
                            onClick={() => setMobileOpen(false)}
                            className="text-xl font-bold whitespace-nowrap"
                        >
                            Cubiloo
                            {/* <span className="text-[#DF7539]">.</span> */}
                        </Link>
                    )}

                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        aria-label="Toggle sidebar"
                        className="hidden lg:block text-gray-400 hover:text-white"
                    >
                        {collapsed ? (
                            <PanelLeftOpen size={21} />
                        ) : (
                            <PanelLeftClose size={21} />
                        )}
                    </button>

                    <button
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close sidebar"
                        className="lg:hidden"
                    >
                        <X size={23} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3 py-7 space-y-2 overflow-y-auto">
                    {(!collapsed || mobileOpen) && (
                        <p className="px-4 mb-4 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold">
                            Main Menu
                        </p>
                    )}

                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        const active =
                            pathname === item.href ||
                            (
                                item.href === "/admin/blogs" &&
                                pathname.startsWith("/admin/blogs/edit/")
                            );

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                title={collapsed ? item.name : undefined}
                                onClick={() => setMobileOpen(false)}
                                className={`
                                    flex items-center gap-3
                                    rounded-xl px-4 py-3.5
                                    text-sm font-medium
                                    transition-all duration-200
                                    ${active
                                        ? "bg-[#DF7539] text-white"
                                        : "text-gray-400 hover:bg-white/10 hover:text-white"}
                                `}
                            >
                                <Icon size={20} className="shrink-0" />

                                {(!collapsed || mobileOpen) && (
                                    <>
                                        <span className="flex-1">
                                            {item.name}
                                        </span>

                                        {active && (
                                            <ChevronRight size={16} />
                                        )}
                                    </>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom */}
                <div className="border-t border-white/10 p-3">
                    <button
                        onClick={handleLogout}
                        disabled={loggingOut}
                        title="Logout"
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition disabled:opacity-50"
                    >
                        <LogOut size={20} className="shrink-0" />

                        {(!collapsed || mobileOpen) && (
                            <span>
                                {loggingOut ? "Logging out..." : "Logout"}
                            </span>
                        )}
                    </button>
                </div>
            </aside>

            {/* Spacer for desktop layout */}
            <div
                className={`
                    hidden lg:block shrink-0
                    transition-all duration-300
                    ${collapsed ? "w-[85px]" : "w-[260px]"}
                `}
            />
        </>
    );
}
