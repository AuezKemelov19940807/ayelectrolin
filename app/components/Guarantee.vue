<script setup lang="ts">
const containerRef = ref(null)


const slides = ref(Array.from({ length: 13 }));
const activeIndex = ref(0);

const onSwiper = (swiper: any) => {
    swiper.on("slideChange", () => {
        activeIndex.value = swiper.realIndex;
    });
};



</script>

<template>
    <div>
        <div class="container">
            <div class="flex justify-between items-center ">
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
                    <div class="flex gap-x-12 items-center ">
                        <div v-for="(slide, idx) in 3" :key="idx">
                            <div class="shadow-2xl"
                                :class="idx === 1 ? 'max-w-[325px] max-h-[460px] ' : 'max-w-[180px] max-h-[248px]'">
                                <img class="w-full h-full object-cover" src="~/assets/img/guarantee-1.webp"
                                    alt="Guarantee Image">
                            </div>
                        </div>
                    </div>

                    <!-- <ClientOnly>
                        <swiper-container ref="swiperRef" :init="false" :initial-slide="2">
                            <swiper-slide class=" " v-for="(slide, idx) in slides" :key="idx">
                                <div>
                                    <img class="w-full h-full object-cover" src="~/assets/img/guarantee-1.webp"
                                        alt="Guarantee Image">
                                </div>
                            </swiper-slide>
                        </swiper-container>
                    </ClientOnly> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="css"></style>