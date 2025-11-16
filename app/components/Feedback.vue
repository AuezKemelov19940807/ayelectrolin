<script setup lang="ts">

const props = defineProps<{
    review: MainReview
}>()


const containerRef = ref(null)
const slides = ref(props.review.items)
const swiper = useSwiper(containerRef, {

    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    spaceBetween: 48,

    speed: 3000,
    effect: 'slide',


})




</script>

<template>
    <div>
        <div class="container">
            <h4 class="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
                {{ review.title }}
            </h4>
            <div class="relative">
                <button class="cursor-pointer absolute hidden lg:block left-0 top-1/2 -translate-y-1/2 "
                    @click="swiper.prev()" type="button" aria-label="Previous slide">
                    <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="48" height="49"
                        viewBox="0 0 49 49" fill="none">
                        <rect x="47.5" y="48" width="47" height="47" rx="7.5" transform="rotate(180 47.5 48)"
                            stroke="#6E3F88" />
                        <path
                            d="M18.4971 12.7726C18.1788 13.1041 18 13.5536 18 14.0222C18 14.4909 18.1788 14.9404 18.4971 15.2718L26.9017 24.0209L18.4971 32.77C18.1878 33.1033 18.0167 33.5498 18.0206 34.0132C18.0244 34.4766 18.203 34.9199 18.5178 35.2476C18.8326 35.5754 19.2585 35.7612 19.7036 35.7653C20.1488 35.7693 20.5777 35.5911 20.8979 35.2692L30.5029 25.2705C30.8212 24.9391 31 24.4896 31 24.0209C31 23.5522 30.8212 23.1027 30.5029 22.7713L20.8979 12.7726C20.5795 12.4413 20.1477 12.2551 19.6975 12.2551C19.2473 12.2551 18.8155 12.4413 18.4971 12.7726Z"
                            fill="#6E3F88" />
                    </svg>
                </button>
                <div class=" w-full max-w-[1300px] mx-auto">
                    <ClientOnly>
                        <swiper-container ref="containerRef" :init="false" class="w-full max-w-[1300px]">
                            <swiper-slide v-for="slide in slides" :key="slide.id">
                                <div class="flex flex-col items-center justify-center gap-y-4 md:gap-y-8">
                                    <p
                                        class="text-base md:text-2xl  leading-[130%] text-center  max-w-[800px] 2xl:max-w-full ">
                                        “ {{ slide.description }} ”</p>
                                    <p class="font-medium md:font-semibold text-lg md:text-2xl">
                                        {{ slide.fullname }}
                                    </p>
                                </div>
                            </swiper-slide>
                        </swiper-container>
                    </ClientOnly>
                </div>
                <button class="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
                    @click="swiper.next()">
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

<style scoped lang="css">
swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important;
    /* каждый слайд не шире контейнера */
}
</style>