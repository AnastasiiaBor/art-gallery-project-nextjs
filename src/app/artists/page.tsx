"use client";

import { Artist } from "../lib/types";
import { artistsList, artistsPageData } from "../lib/fetch";
import ArtistCard from "@/components/artistCard";

export default function ArtistsPage() {

  return (
    <main className="container mx-auto flex flex-col px-6">
      <section className="padding64x24 w-full">
        <div className="content w-full sm:w-1/2">
          <h2>{artistsPageData.artistsHeader}</h2>
          <p>{artistsPageData.artistsText}</p>
        </div>
      </section>
      <hr className="w-1/2 mx-auto" />
      <section className="container py-64">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {artistsList.map((artist: Artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>
    </main>
  );
}
// ADD hover effect on artist card
// ADD: Pagination if more than 10 artists
