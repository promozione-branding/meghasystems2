
"use client";

import React, { useMemo, useRef } from "react";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(
    () => import("jodit-react"),
    { ssr: false }
);

export default function BlogEditor({ value, onChange }) {
    const editor = useRef(null);

    const config = useMemo(
        () => ({
            readonly: false,
            height: 450,
            minHeight: 350,
            placeholder: "Write your blog content here...",
            toolbarAdaptive: false,
            toolbarSticky: false,
            spellcheck: true,
            askBeforePasteHTML: false,
            askBeforePasteFromWord: false,
            defaultActionOnPaste: "insert_as_html",
            buttons: [
                "source", "|",
                "bold", "italic", "underline", "strikethrough", "|",
                "ul", "ol", "|",
                "font", "fontsize", "paragraph", "|",
                "align", "outdent", "indent", "|",
                "link", "table", "hr", "|",
                "undo", "redo", "|",
                "fullsize",
            ],
            removeButtons: ["file", "video", "image"],
            uploader: {
                insertImageAsBase64URI: false,
            },
        }),
        []
    );

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <JoditEditor
                ref={editor}
                value={value}
                config={config}
                onBlur={(newContent) => onChange(newContent)}
            />
        </div>
    );
}
