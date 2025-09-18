import { Artwork } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";

interface ArtworkCardProps {
  artwork: Artwork;
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <div key={artwork.id} className="artwork-card bg-white shadow-md mb-6">
      {artwork.image && (
        <Image
          className="w-full h-auto object-cover"
          src={artwork.image.url}
          alt={artwork.title}
          width={500}
          height={0}
          priority
        />
      )}
      <div className="px-4 py-6 text-center">
        <Link href={`/gallery/${artwork.slug}`}>
          <h3 className="text-lg font-bold">{artwork.title}</h3>
          <p className="text-sm text-gray-500">{artwork.artist?.name}, {artwork.year}</p>
        </Link>
      </div>
    </div>
  );
}
