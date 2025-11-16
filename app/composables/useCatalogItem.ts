export const useCatalogItem = async (slug?: string) => {
  const { locale } = useI18n();
  const config = useRuntimeConfig();

  const { data, error, pending, refresh } = await useFetch<CatalogItem>(
    `${config.public.apiBaseUrl}/api/catalog/items/${slug}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      query: { lang: locale.value },
    }
  );

  return { data, error, pending, refresh };
};
