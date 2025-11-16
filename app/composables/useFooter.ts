import { useI18n } from "vue-i18n";

export const useFooter = async () => {
  const { locale } = useI18n();
  const config = useRuntimeConfig();

  const { data, error, pending, refresh } = await useAsyncData(
    "footer",
    () =>
      $fetch<FooterData>(
        `${config.public.apiBaseUrl}/api/footer?lang=${locale.value}`
      ),
    { watch: [locale] }
  );

  return { data, error, pending, refresh };
};
