<script setup lang="ts">
const containerRef = ref(null)
const slides = ref(Array.from({ length: 10 }))


const activeIndex = ref(0);

const onSlideChange = (e: CustomEvent) => {
    const swiper = e.detail[0];
    activeIndex.value = swiper.activeIndex;
};

const swiper = useSwiper(containerRef, {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
})



</script>

<template>
    <div class="mb-40">
        <div class="container">
            <div class="flex justify-between gap-x-44  ">
                <div class="max-w-[718px]">
                    <UITitle class="mb-6" title="Гарантируем качество" />
                    <div class="flex flex-col gap-y-6">
                        <div class="flex flex-col gap-y-4 border border-violet rounded-lg py-2 px-4">
                            <p class="font-semibold text-2xl">Комплектующие от мировых брендов</p>
                            <p class="text-base text-black">В случае любых неполадок, мы обеспечим вам быстрый ремонт
                                или замену без дополнительных
                                затрат.</p>
                        </div>
                        <div class="flex flex-col gap-y-4  border border-violet rounded-lg py-2 px-4">
                            <p class="font-semibold text-2xl">Гарантируем надежность и безопасность</p>
                            <p class="text-base text-black">Мы уверены в качестве каждого компонента и предоставляем
                                расширенную гарантию на
                                комплектующие и оборудование. </p>
                        </div>
                    </div>
                </div>
                <div class="max-w-[780px]">
                    <ClientOnly>
                        <swiper-container ref="containerRef" :init="false" @slidechange="onSlideChange">
                            <swiper-slide class="max-w-[325px] max-h-[460px] " v-for="(slide, idx) in slides"
                                :key="idx">
                                <div>
                                    <img class="w-full h-full object-cover" src="~/assets/img/guarantee-1.webp"
                                        alt="Guarantee Image">

                                </div>

                            </swiper-slide>
                        </swiper-container>
                    </ClientOnly>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="css"></style>