
import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        content: {
            type: String,
            required: true,
        },

        image: {
            type: String,
            default: "",
        },

        imageFileId: {
            type: String,
            default: "",
        },

        metaTitle: {
            type: String,
            default: "",
        },

        metaDescription: {
            type: String,
            default: "",
        },

        publishDate: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Blog ||
    mongoose.model("Blog", BlogSchema);
