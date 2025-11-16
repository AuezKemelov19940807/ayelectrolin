<script setup lang="ts">
import IMask from 'imask';
const props = defineProps<{
    consultation: MainConsultation
}>()

const { data } = await useContact()








onMounted(async () => {
    await nextTick(); // подождите пока DOM полностью обновится

    const element = document.getElementById('check-up-phone-input');

    if (element) {
        const maskOptions = {
            mask: '+{7}(000)000-00-00',
        };
        IMask(element, maskOptions);
    } else {
        console.error('Элемент с ID "check-up-phone-input" не найден');
    }
});

</script>

<template>
    <div>
        <div class="container">
            <div class="grid md:grid-cols-2 gap-y-6 gap-x-6 xl:gap-x-10 2xl:gap-x-30">
                <div class="w-full lg:max-w-[650px]">
                    <UITitle class="mb-10 text-center lg:text-left " :title="consultation.title" />
                    <ContactFormBlock :name_placeholder="consultation.name_placeholder"
                        :message_placeholder="consultation.message_placeholder" :btn_text="consultation.btn_text"
                        :note_text="consultation.note_text" />
                </div>
                <div class="flex-1 w-full flex flex-col md:flex-1 gap-y-4 md:gap-y-7.5">
                    <Map />
                    <div class="border border-violet p-6 rounded-lg flex flex-col gap-y-4 md:gap-y-8.5">
                        <p class="text-2xl font-semibold text-violet"> {{ consultation.contact_info_text }} </p>
                        <a class="flex items-center gap-x-2.5" :href="`tel:${data?.ayelectrolin.number}`">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 16"
                                    fill="none">
                                    <path
                                        d="M4.71922 1H2.5C1.39543 1 0.5 1.89543 0.5 3V5C0.5 10.5228 4.97715 15 10.5 15H12.5C13.6046 15 14.5 14.1046 14.5 13V11.618C14.5 11.2393 14.286 10.893 13.9472 10.7236L11.5313 9.51564C10.987 9.24349 10.3278 9.51652 10.1354 10.0938L9.83762 10.9871C9.64474 11.5658 9.05118 11.9102 8.45309 11.7906C6.05929 11.3119 4.18814 9.44071 3.70938 7.04691C3.58976 6.44882 3.93422 5.85526 4.51286 5.66238L5.62149 5.29284C6.11721 5.1276 6.40214 4.60855 6.2754 4.10162L5.68937 1.75746C5.57807 1.3123 5.17809 1 4.71922 1Z"
                                        stroke="#6E3F88" />
                                </svg>
                            </span>
                            <span class="font-medium text-black text-lg"> {{ data?.ayelectrolin.number }} </span>
                        </a>
                        <a class="flex items-center gap-x-2.5" :href="`mailto:${data?.ayelectrolin.email}`">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 15 14"
                                    fill="none">
                                    <path
                                        d="M0.5 4L7.5 8L14.5 4M1.5 1H13.5C14.0523 1 14.5 1.44772 14.5 2V12C14.5 12.5523 14.0523 13 13.5 13H1.5C0.947716 13 0.5 12.5523 0.5 12V2C0.5 1.44772 0.947715 1 1.5 1Z"
                                        stroke="#6E3F88" />
                                </svg>
                            </span>
                            <span class="font-medium text-black text-lg"> {{ data?.ayelectrolin.email }} </span>
                        </a>
                        <a class="flex md:items-center gap-x-2.5"
                            :href="`https://2gis.kz/almaty/geo/9430047375103632/${data?.coordinates.lat}?m=${data?.coordinates.lat}&utm_source=bigMap&utm_medium=widget-source&utm_campaign=firmsonmap`"
                            target="_blank">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 13 18"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6.5 8.49478C7.604 8.49478 8.5 7.59934 8.5 6.49606C8.5 5.39278 7.604 4.49738 6.5 4.49738C5.396 4.49738 4.5 5.39278 4.5 6.49606C4.5 7.59934 5.396 8.49478 6.5 8.49478Z"
                                        stroke="#6E3F88" stroke-linecap="square" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12.5 5.99606C12.5 11 6.5 16.4909 6.5 16.4909C6.5 16.4909 0.5 11 0.5 6.49606C0.5 3.18522 3.187 0.5 6.5 0.5C9.813 0.5 12.5 2.68522 12.5 5.99606Z"
                                        stroke="#6E3F88" stroke-linecap="square" />
                                </svg>
                            </span>
                            <span class="font-medium text-black text-lg">
                                {{ data?.ayelectrolin.address }}
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="css"></style>