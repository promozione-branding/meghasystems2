
import { NextResponse } from "next/server";
import { createAdminToken } from "@/libs/admin-auth";

export const runtime = "nodejs";

export async function POST(request) {
    try {
        const body = await request.json();

        const email = body.email?.trim().toLowerCase();
        const password = body.password;

        if (!email || !password) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Email and password are required",
                },
                { status: 400 }
            );
        }

        const adminEmail = process.env.ADMIN_MAIL?.trim().toLowerCase();
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminEmail || !adminPassword) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Admin credentials not configured",
                },
                { status: 500 }
            );
        }

        // Direct comparison without bcrypt
        if (email !== adminEmail || password !== adminPassword) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid email or password",
                },
                { status: 401 }
            );
        }

        const token = await createAdminToken(adminEmail);

        const response = NextResponse.json({
            success: true,
            message: "Login successful",
            admin: {
                email: adminEmail,
                role: "admin",
            },
        });

        response.cookies.set(
            process.env.ADMIN_COOKIE_NAME || "admin_token",
            token,
            {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                path: "/",
                maxAge: 60 * 60 * 24 * 7,
            }
        );

        return response;

    } catch (error) {
        console.error("Admin Login Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Internal server error",
            },
            { status: 500 }
        );
    }
}
