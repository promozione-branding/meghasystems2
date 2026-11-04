
import { SignJWT, jwtVerify } from "jose";

const getSecret = () => {
    const secret = process.env.JWT_ADMIN_SECRET;

    if (!secret || secret.length < 32) {
        throw new Error(
            "JWT_ADMIN_SECRET must contain at least 32 characters"
        );
    }

    return new TextEncoder().encode(secret);
};

export async function createAdminToken(email) {
    return new SignJWT({
        email,
        role: "admin",
    })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(getSecret());
}

export async function verifyAdminToken(token) {
    if (!token) return null;

    try {
        const { payload } = await jwtVerify(
            token,
            getSecret(),
            { algorithms: ["HS256"] }
        );

        if (
            payload.role !== "admin" ||
            typeof payload.email !== "string"
        ) {
            return null;
        }

        return payload;
    } catch {
        return null;
    }
}
