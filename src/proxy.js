
import { NextResponse } from "next/server";
import { verifyAdminToken } from "@/libs/admin-auth";

export async function proxy(request) {
    const { pathname } = request.nextUrl;

    const token = request.cookies.get(
        process.env.ADMIN_COOKIE_NAME || "admin_token"
    )?.value;

    const admin = await verifyAdminToken(token);

    const isLoginPage = pathname === "/admin/login";

    const isProtectedAdminPage =
        pathname === "/admin" ||
        pathname.startsWith("/admin/");

    const isProtectedAdminAPI =
        pathname.startsWith("/api/admin/") &&
        ![
            "/api/admin/login",
            "/api/admin/logout",
        ].includes(pathname);

    // Authenticated admin should not access login
    if (isLoginPage && admin) {
        return NextResponse.redirect(
            new URL("/admin", request.url)
        );
    }

    // Protect admin pages
    if (isProtectedAdminPage && !isLoginPage && !admin) {
        return NextResponse.redirect(
            new URL("/admin/login", request.url)
        );
    }

    // Protect admin APIs
    if (isProtectedAdminAPI && !admin) {
        return NextResponse.json(
            {
                success: false,
                message: "Unauthorized access",
            },
            { status: 401 }
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/admin/:path*",
        "/api/admin/:path*",
    ],
};
