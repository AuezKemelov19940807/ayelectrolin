<script setup lang="ts">
const containerRef = ref(null)
const slides = ref(Array.from({ length: 10 }))
const swiper = useSwiper(containerRef, {

    loop: true,


})

onMounted(() => {
    console.log(swiper.instance)
})
</script>

<template>
    <div>
        <div class="container">
            <h4 class="text-3xl font-bold text-center mb-8">Отзывы наших клиентов</h4>
            <div class="flex">
                <button class="cursor-pointer" @click="swiper.prev()">
                    <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="48" height="49"
                        viewBox="0 0 49 49" fill="none">
                        <rect x="47.5" y="48" width="47" height="47" rx="7.5" transform="rotate(180 47.5 48)"
                            stroke="#6E3F88" />
                        <path
                            d="M18.4971 12.7726C18.1788 13.1041 18 13.5536 18 14.0222C18 14.4909 18.1788 14.9404 18.4971 15.2718L26.9017 24.0209L18.4971 32.77C18.1878 33.1033 18.0167 33.5498 18.0206 34.0132C18.0244 34.4766 18.203 34.9199 18.5178 35.2476C18.8326 35.5754 19.2585 35.7612 19.7036 35.7653C20.1488 35.7693 20.5777 35.5911 20.8979 35.2692L30.5029 25.2705C30.8212 24.9391 31 24.4896 31 24.0209C31 23.5522 30.8212 23.1027 30.5029 22.7713L20.8979 12.7726C20.5795 12.4413 20.1477 12.2551 19.6975 12.2551C19.2473 12.2551 18.8155 12.4413 18.4971 12.7726Z"
                            fill="#6E3F88" />
                    </svg>
                </button>
                <div class="max-w-[1300px] mx-auto">
                    <ClientOnly>
                        <swiper-container ref="containerRef" :init="false">
                            <swiper-slide v-for="(slide, idx) in slides" :key="idx">
                                <div class="flex flex-col items-center justify-center gap-y-8">
                                    <p class="text-2xl leading-[130%] text-center">“ Отличная компания! Профессионалы
                                        своего дела,
                                        все вопросы
                                        решают быстро и
                                        грамотно. Очень доволен их работой, рекомендую всем! ”</p>
                                    <p class="font-semibold text-2xl">Якубов Антон</p>
                                </div>
                            </swiper-slide>
                        </swiper-container>
                    </ClientOnly>
                </div>


                <!-- Go back one slide -->

                <!-- Go forward one slide -->
                <button class="cursor-pointer" @click="swiper.next()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 49 49" fill="none">
                        <rect x="47.5" y="48" width="47" height="47" rx="7.5" transform="rotate(180 47.5 48)"
                            stroke="#6E3F88" />
                        <path
                            d="M18.4971 12.7726C18.1788 13.1041 18 13.5536 18 14.0222C18 14.4909 18.1788 14.9404 18.4971 15.2718L26.9017 24.0209L18.4971 32.77C18.1878 33.1033 18.0167 33.5498 18.0206 34.0132C18.0244 34.4766 18.203 34.9199 18.5178 35.2476C18.8326 35.5754 19.2585 35.7612 19.7036 35.7653C20.1488 35.7693 20.5777 35.5911 20.8979 35.2692L30.5029 25.2705C30.8212 24.9391 31 24.4896 31 24.0209C31 23.5522 30.8212 23.1027 30.5029 22.7713L20.8979 12.7726C20.5795 12.4413 20.1477 12.2551 19.6975 12.2551C19.2473 12.2551 18.8155 12.4413 18.4971 12.7726Z"
                            fill="#6E3F88" />
                    </svg>
                </button>
            </div>


        </div>
    </div>
</template>

<style scoped lang="css"></style>