
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

export default function AdminLayout({ children }) {
    const pathname = usePathname();

    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-[#F8F9FA] flex">
            <Sidebar />

            <main className="flex-1 min-w-0 pt-16 lg:pt-0">
                {children}
            </main>
        </div>
    );
}
