
export interface Artist {
  id: string;
  name: string;
  slug: string;
  portrait?: { url: string };
  biography?: string;
  lifespan?: string;
  country?: string;
  artworks: Artwork[];
}

export interface Artwork {
  id: string;
  title: string;
  slug: string;
  image?: { url: string };
  artist?: { name: string };
  year?: string;
  description?: string;
  owner?: string;
}

export type NavLink = {
  title: string;
  url: string;
};

export interface HeaderProps {
  title: string;
  links: NavLink[];
}
