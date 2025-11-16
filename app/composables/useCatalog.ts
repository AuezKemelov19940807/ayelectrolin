export const useCatalog = async () => {
  const { locale } = useI18n();
  const config = useRuntimeConfig();

  const { data, error, pending, refresh } = await useFetch<any>(
    `${config.public.apiBaseUrl}/api/catalog`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      query: { lang: locale.value },
    }
  );

  return { data, error, pending, refresh };
};
