"use client";

import { homepageData } from "./lib/fetch";
import Image from "next/image";

export default function Homepage() {
  return (
    <main className="homepage-wrapper">
      <section className="hero">
        <h1 className="title">{homepageData.heroText}</h1>
        <Image
          src={homepageData.heroImage.url}
          alt={homepageData.heroImage.alt || "Hero image"}
          className="hero-image"
          fill
          priority
        />
      </section>
      <section className="description relative padding64x24 w-full bg-white">
        <div className="content">
          <h2>{homepageData.sectionHeader}</h2>
          <p>{homepageData.sectionText}</p>
        </div>
      </section>
    </main>
  );
}

// ADD: Discover button linking to /gallery
