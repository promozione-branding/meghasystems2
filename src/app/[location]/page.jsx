
import React from "react";
import { notFound } from "next/navigation";

import ToiletPartitionsLocation from "@/components/Location/ToiletPartitionsLocation";
import ToiletCubiclesLocation from "@/components/Location/ToiletCubiclesLocation";

export default async function LocationPage({ params }) {
  const { location } = await params;

  const partitionPrefix = "toilet-partitions-manufacturer-in-";
  const cubiclePrefix = "toilet-cubicles-manufacturers-in-";

  if (location.startsWith(partitionPrefix)) {
    const city = location.replace(partitionPrefix, "");

    if (!city) notFound();

    return <ToiletPartitionsLocation city={city} />;
  }

  if (location.startsWith(cubiclePrefix)) {
    const city = location.replace(cubiclePrefix, "");

    if (!city) notFound();

    return <ToiletCubiclesLocation city={city} />;
  }

  notFound();
}
