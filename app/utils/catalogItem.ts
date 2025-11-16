export interface CatalogItem {
  id: number;
  title: string;
  slug: string;
  image: string;
  description?: string;
  technical_specs?: {
    title: string;
    description: string;
  }[];
  images?: string[];
  category: {
    id: number;
    slug: string;
  };
  seo?: {
    title: string;
    og_title: string;
    description: string;
    og_description: string;
    og_image: string;
    twitter_card?: string;
  };
}
