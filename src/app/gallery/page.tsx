"use client";

import { Artwork } from "../lib/types";
import { artworksList, galleryPageData } from "../lib/fetch";
import ArtworkCard from "@/components/artworkCard";

export default function GalleryPage() {
  return (
    <main className="container mx-auto flex flex-col px-6">
      <section className="padding64x24 w-full">
        <div className="content w-full sm:w-1/2">
          <h1>{galleryPageData.galleryHeader}</h1>
          <p className="text-justify">{galleryPageData.galleryText}</p>
        </div>
      </section>
      <hr className="w-1/2 mx-auto" />
      <section className="container py-64">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {artworksList.map((artwork: Artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </section>
    </main>
  );
}

// ADD hover effect on artwork card
// ADD: Pagination if more than 10 artworks
