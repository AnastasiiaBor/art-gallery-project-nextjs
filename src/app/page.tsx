"use client"; 

// Import React hooks and Image component
import { useEffect, useState } from "react";
import Image from "next/image";

export interface Artist {
  id: string;
  name: string;
  content: string;
  portrait: { url: string };
  lifespan: string;
  biography: string;
}

// Define Strapi URL
const STRAPI_URL = "https://refreshing-happiness-7b2933c025.strapiapp.com";

export default function Home() {
  // Define articles state
  const [articles, setArticles] = useState<Artist[]>([]);
  const [homepage, setHomepage] = useState([]);
  
  const getHomepage = async () => {
    const response = await fetch(`${STRAPI_URL}/api/homepage`);
    const data = await response.json();
    console.log('data', data);
    setHomepage(data.data);
  }
  const getArticles = async () => {
    const response = await fetch(`${STRAPI_URL}/api/artists?populate=*`);
    const data = await response.json();
    setArticles(data.data);
  };

  useEffect(() => {
    getArticles();
    getHomepage();
  }, []);
  console.log('artists', articles);
  console.log('homepage', homepage);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8">
        Next.js and Strapi Integration
      </h1>
      <div>
        <h2 className="text-2xl font-semibold mb-6">Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {article.portrait && (
              <Image
                className="w-full h-48 object-cover"
                src={article.portrait.url}
                alt={article.name}
                width={180}
                height={38}
                priority
              />
              )}
              <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{article.name}</h3>
              {/* <p className="text-gray-600 mb-4">{article.biography}</p> */}
              <p className="text-sm text-gray-500">
                {article.lifespan}
              </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
