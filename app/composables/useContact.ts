import { useI18n } from "vue-i18n";

export const useContact = async () => {
  const { locale } = useI18n();
  const config = useRuntimeConfig();

  const { data, error, pending, refresh } = await useAsyncData(
    "contacts",
    () =>
      $fetch<ContactData>(
        `${config.public.apiBaseUrl}/api/contacts?lang=${locale.value}`
      ),
    { watch: [locale] }
  );

  return { data, error, pending, refresh };
};
