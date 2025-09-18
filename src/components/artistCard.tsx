import { Artist } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";

interface ArtistCardProps {
  artist: Artist;
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <div key={artist.id} className="artist-card bg-white shadow-md mb-6">
      {artist.portrait && (
        <Image
          className="w-full object-cover aspect-3/4 w-full overflow-hidden"
          src={artist.portrait.url}
          alt={artist.name}
          width={200}
          height={300}
          priority
        />
      )}
      <div className="px-4 py-6 text-center">
        <Link href={`/artists/${artist.slug}`}>
          <h3 className="text-lg font-bold">{artist.name}</h3>
          <p className="text-sm text-gray-500">{artist.lifespan}</p>
        </Link>
      </div>
    </div>
  );
}
