export const useCatalogItemSeo = async (itemId: number | string) => {
  const { locale } = useI18n();
  const config = useRuntimeConfig();

  const { data, error, pending, refresh } = await useFetch(
    `${config.public.apiBaseUrl}/api/catalog/items/${itemId}/seo`,
    {
      method: "get",
      headers: { "Content-Type": "application/json" },
      query: { lang: locale.value },
    }
  );

  return { data, error, pending, refresh };
};
