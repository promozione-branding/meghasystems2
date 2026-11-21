import React from 'react'
import Products from './Products'

export const metadata = {
    title: "Toilet Cubicles & Restroom Partitions | Cubiloo Cubicles",
    description:
        "Explore toilet cubicle systems in Classic, Luxe and Kids ranges, plus urinal modesty panels. HPL, compact laminate and stainless steel options in custom sizes.",
};

export default async function page({ searchParams }) {
    const params = await searchParams;
    const search = params?.search;

    return (
        <Products searchQuery={Array.isArray(search) ? search[0] || "" : search || ""} />
    )
}
