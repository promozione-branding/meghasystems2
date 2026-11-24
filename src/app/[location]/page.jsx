
import React from "react";
import { notFound, redirect } from "next/navigation";

import ToiletPartitionsLocation from "@/components/Location/ToiletPartitionsLocation";
import ToiletCubiclesLocation from "@/components/Location/ToiletCubiclesLocation";
import partitionCities, { cubicleCities } from "@/components/Location/city";

export default async function LocationPage({ params }) {
  const { location } = await params;

  const partitionPrefix = "toilet-partitions-manufacturer-in-";
  const cubiclePrefix = "toilet-cubicles-manufacturers-in-";

  if (location.startsWith(partitionPrefix)) {
    const city = location.replace(partitionPrefix, "");

    const cityPath = `/${location}/`;
    const isListedCity = partitionCities.some(
      (partitionCity) => partitionCity.href === cityPath
    );

    if (!isListedCity) redirect("/");

    return <ToiletPartitionsLocation city={city} />;
  }

  if (location.startsWith(cubiclePrefix)) {
    const city = location.replace(cubiclePrefix, "");

    const cityPath = `/${location}/`;
    const isListedCity = cubicleCities.some(
      (cubicleCity) => cubicleCity.href === cityPath
    );

    if (!isListedCity) redirect("/");

    return <ToiletCubiclesLocation city={city} />;
  }

  notFound();
}
