import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request) {
    const supplierToken = process.env.SUPPLIER_TOKEN;

    if (!supplierToken) {
        return NextResponse.json(
            { success: false, message: "Enquiry form is not configured." },
            { status: 500 }
        );
    }

    let formData;
    try {
        formData = await request.json();
    } catch {
        return NextResponse.json(
            { success: false, message: "Invalid form submission." },
            { status: 400 }
        );
    }

    if (!formData?.name || !formData?.phone || !formData?.product) {
        return NextResponse.json(
            { success: false, message: "Please complete all required fields." },
            { status: 400 }
        );
    }

    try {
        const response = await fetch("https://brandbnalo.com/api/form/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                platform: formData.platform || "Altius Elstrong Popup Form",
                platformEmail: "altus@email.com",
                supplierToken,
                name: formData.name,
                phone: formData.phone,
                email: formData.email || "N/A",
                place: formData.place || "N/A",
                product: formData.product,
                message: formData.message || "N/A",
            }),
            signal: AbortSignal.timeout(15000),
        });

        const data = await response.json();
        return NextResponse.json(data, { status: response.status });
    } catch (error) {
        console.error("Enquiry API submission error:", error);
        return NextResponse.json(
            { success: false, message: "Unable to submit your enquiry right now." },
            { status: 502 }
        );
    }
}
