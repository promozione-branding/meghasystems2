
import mongoose from "mongoose";

const cached = globalThis.mongooseCache || { conn: null, promise: null, };

globalThis.mongooseCache = cached;

export async function connectDB() {
    if (cached.conn) return cached.conn;

    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI is not configured");
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGO_URI, {
            bufferCommands: false,
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        throw error;
    }

    return cached.conn;
}
