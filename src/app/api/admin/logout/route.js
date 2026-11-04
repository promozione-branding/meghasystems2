
import { NextResponse } from "next/server";

export async function POST() {
    const response = NextResponse.json({
        success: true,
        message: "Logged out successfully",
    });

    response.cookies.set(
        process.env.ADMIN_COOKIE_NAME || "admin_token",
        "",
        {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 0,
        }
    );

    return response;
}
