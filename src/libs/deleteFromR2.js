
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { r2 } from "./r2";

export const deleteFromR2 = async (key) => {
    try {
        if (!key) return false;

        await r2.send(
            new DeleteObjectCommand({
                Bucket: process.env.CLOUD_FLARE_R2_BUCKET,
                Key: key,
            })
        );

        return true;
    } catch (error) {
        console.error("R2 Delete Error:", error.message);
        return false;
    }
};
