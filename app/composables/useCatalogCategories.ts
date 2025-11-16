export const useCatalogCategories = async (slug?: string) => {
  const { locale } = useI18n();
  const config = useRuntimeConfig();

  const { data, error, pending, refresh } =
    await useFetch<CatalogCategoriesResponse>(
      `${config.public.apiBaseUrl}/api/catalog/categories`,
      {
        method: "get",
        headers: { "Content-Type": "application/json" },
        query: { lang: locale.value },
      }
    );

  return { data, error, pending, refresh };
};
