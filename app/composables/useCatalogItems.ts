export const useCatalogItems = async () => {
  const { locale } = useI18n();
  const config = useRuntimeConfig();

  const { data, error, pending, refresh } = await useFetch<CatalogItem[]>(
    `${config.public.apiBaseUrl}/api/catalog/items`,
    {
      method: "get",
      headers: { "Content-Type": "application/json" },
      query: { lang: locale.value },
    }
  );

  return { data, error, pending, refresh };
};
