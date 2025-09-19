import { fetchFromStrapi } from "../../lib/fetch";
import Image from "next/image";

interface ArtistProps {
  params: { slug: string };
}

export default async function ArtworkPage({ params }: ArtistProps) {
  const { slug } = params;

  const data = await fetchFromStrapi(
    `/artworks?filters[slug][$eq]=${slug}&populate=*`
  );

  const artwork = data[0];

  if (!artwork) return <p>Artwork not found</p>;

  return (
    <main className="artwork-wrapper relative">
      <section className="artwork-display fixed inset-0 w-full">
        <div className="background"></div>
        <div className="artwork-container relative flex flex-col content-center justify-center">
          <div className="frame mx-auto">
            <Image
              src={artwork.image.url}
              alt={artwork.title}
              width={600}
              height={0}
              className="h-auto w-auto object-contain"
            />
          </div>
          <div className="bg-white mx-auto mt-6 px-4 py-6 text-center shadow">
            <h3 className="">{artwork.title}</h3>
            <p className="text-sm text-gray-500">
              {artwork.artist?.name}, {artwork.year}
            </p>
          </div>
        </div>
      </section>

      <section className="artwork-description relative padding64x24">
        <div className="content">
          <h1 className="font-bold mb-4">{artwork.title}</h1>
          <p className="text-gray-700 mb-6 text-justify">{artwork.description}</p>
          <p className="text-gray-700 text-justify">Location: {artwork.owner}</p>
        </div>
      </section>
    </main>
  );
}
