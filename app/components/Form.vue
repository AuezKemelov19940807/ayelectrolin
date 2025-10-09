<script setup lang="ts">

import IMask from 'imask';


const props = defineProps<{
    title: string
}>()

const { close } = useModal()


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
    <div class="w-full bg-white px-4 md:px-6 pt-12 pb-4 md:pb-10 rounded-3xl min-w-[300px] lg:max-w-[500px] relative">
        <button class="absolute top-4 md:top-4 right-2.5 md:right-4 cursor-pointer" @click="close" type="button">
            <img src="~/assets/img/close.svg" alt="Close Icon">
        </button>
        <p class="text-xl md:text-2xl mb-4 md:mb-6  font-semibold text-center ">
            Форма обратной связи
        </p>
        <form action="" method="post" class="flex  flex-col gap-y-4 md:gap-y-6">
            <label for="">
                <input
                    class="border border-violet rounded-2xl md:rounded-3xl p-2.5 md:p-4 w-full focus:outline-none  md:text-lg "
                    type="tel" id="check-up-phone-input" placeholder="+7 (___) ___ __ __">
            </label>
            <label for="">
                <input
                    class="border border-violet rounded-2xl md:rounded-3xl p-2.5 md:p-4 w-full focus:outline-none  md:text-lg"
                    type="text" placeholder="Ваше имя">
            </label>
            <textarea
                class="border border-violet rounded-2xl md:rounded-3xl p-2.5 md:p-4 h-[150px] md:h-[200px] resize-none focus:outline-none md:text-lg "
                name="" id="" placeholder="Ваша заявка"></textarea>
            <button class="bg-violet text-white md:text-lg py-2.5 md:py-4 font-medium rounded-4xl cursor-pointer">
                Отправить
            </button>
            <p class="text-xs md:text-base opacity-70">
                Мы ответим в ближайшее время и предложим лучшее решение для вашего проекта.
            </p>

        </form>
    </div>
</template>

<style scoped lang="css"></style>
