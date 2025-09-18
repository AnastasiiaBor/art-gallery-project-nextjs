const STRAPI_URL = "https://refreshing-happiness-7b2933c025.strapiapp.com";

export async function fetchFromStrapi(path: string) {
  const res = await fetch(`${STRAPI_URL}/api${path}`);
  const data = await res.json();
  return data.data;
}

const artistsList = await fetchFromStrapi("/artists?fields[0]=name&fields[1]=slug&fields[2]=lifespan&populate[portrait][fields][0]=url");
const artworksList = await fetchFromStrapi(
  "/artworks?fields[0]=title&fields[1]=slug&fields[2]=year&populate[image][fields][0]=url&populate[artist][fields][0]=name"
);

const homepageData = await fetchFromStrapi("/homepage?populate=*");
const galleryPageData = await fetchFromStrapi("/gallery-page");
const artistsPageData = await fetchFromStrapi("/artists-page");

const globalData = await fetchFromStrapi(
  "/global?fields[0]=title&populate[navigationLink][fields][0]=title&populate[navigationLink][fields][1]=url"
);

export { artistsList, artworksList, homepageData, globalData, galleryPageData, artistsPageData };
