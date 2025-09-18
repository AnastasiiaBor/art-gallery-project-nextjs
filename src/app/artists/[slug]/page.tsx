import { fetchFromStrapi } from "../../lib/fetch";
import Image from "next/image";

interface ArtistProps {
  params: { slug: string };
}

export default async function ArtistPage({ params }: ArtistProps) {
  const { slug } = params;

  const data = await fetchFromStrapi(
    `/artists?filters[slug][$eq]=${slug}&populate=*`
  );

  const artist = data[0];

  if (!artist) return <p>Artist not found</p>;

  return (
    <main className="artist-wrapper relative">
      <div className="padding64x24 text-2xl font-bold">
        <h1>{artist.name}</h1>
      </div>

      <section className="artist-display">
        <div className="frame mx-auto relative">
          <Image
            src={artist.portrait.url}
            alt={artist.name}
            width={300}
            height={500}
            className="object-contain"
          />
        </div>

        <div className="short-info px-4 pb-6 pt-0 sm:pt-6 text-center">
          <p className="text-gray-700">Lifespan: {artist.lifespan}</p>
          <p className="text-gray-700">Country of origin: {artist.country}</p>
        </div>
      </section>

      <section className="artist-description padding64x24">
        <div className="content">
          <p className="text-gray-700">{artist.biography}</p>
        </div>
      </section>
    </main>
  );
}
