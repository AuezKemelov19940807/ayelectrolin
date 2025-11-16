import { useI18n } from "vue-i18n";

export const useMain = async () => {
  const { locale } = useI18n();
  const config = useRuntimeConfig();

  const { data, error, pending, refresh } = await useFetch<MainData>(
    `${config.public.apiBaseUrl}/api/main`,
    {
      method: "get",
      headers: { "Content-Type": "application/json" },
      query: {
        lang: locale.value,
      },
    }
  );

  return { data, error, pending, refresh };
};
