"use client";

import dynamic from "next/dynamic";

const DynamicHeroScene = dynamic(
  () => import("@/components/hero-scene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => <div className="hero-scene" aria-hidden="true" />,
  }
);

export function HeroSceneClient() {
  return <DynamicHeroScene />;
}
