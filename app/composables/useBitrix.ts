export function useBitrix() {
  const loading = ref(false);
  const success = ref(false);
  const error = ref<string | null>(null);

  const config = useRuntimeConfig();

  const createContact = async (payload: {
    name: string;
    phone: string;
    email?: string;
  }) => {
    try {
      loading.value = true;
      error.value = null;

      const response = await fetch(
        `${config.public.apiBaseUrl}/api/bitrix/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) throw new Error("Ошибка при создании контакта");
      const data = await response.json();

      return data;
    } catch (err: any) {
      error.value = err.message || "Ошибка при создании контакта";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const createDeal = async (payload: {
    title: string;
    contactId?: number;
    message?: string;
  }) => {
    try {
      loading.value = true;
      error.value = null;

      const response = await fetch(
        `${config.public.apiBaseUrl}/api/bitrix/deal`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) throw new Error("Ошибка при создании сделки");
      const data = await response.json();

      success.value = true;
      return data;
    } catch (err: any) {
      error.value = err.message || "Ошибка при создании сделки";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    success,
    error,
    createContact,
    createDeal,
  };
}
