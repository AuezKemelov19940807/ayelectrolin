export interface CatalogCategory {
  id: number;
  title: string;
  slug: string;
}

export interface CatalogCategoriesResponse {
  data: CatalogCategory[];
}
