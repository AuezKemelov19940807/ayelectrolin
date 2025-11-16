import { useRuntimeConfig } from "#app";

export function useBitrixContact() {
  const config = useRuntimeConfig();

  const sendContact = async (payload: {
    phone: string;
    name: string;
    message?: string;
  }) => {
    const response = await fetch(
      `${config.public.apiBaseUrl}/api/bitrix/contact`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    // Если сервер вернул ошибку, пробуем обработать тело
    if (!response.ok) {
      const errText = await response.text().catch(() => "");
      throw new Error(errText || "Ошибка при отправке данных в Bitrix24");
    }

    return await response.json();
  };

  return { sendContact };
}
