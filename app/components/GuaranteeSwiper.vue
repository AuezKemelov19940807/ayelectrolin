<script setup lang="ts">
const swiperRef = ref<any>(null)
const activeIndex = ref(4)

import guarantee1 from '~/assets/img/guarantee-1.webp'
import guarantee2 from '~/assets/img/guarantee-2.webp'


const guaranteeItems = [
    {
        id: 1,
        image: guarantee1
    },
    {
        id: 2,
        image: guarantee2
    }
]


// Следим за активным слайдом
watch(swiperRef, (swiper) => {
    if (swiper) {
        swiper.swiper.on("slideChange", () => {
            activeIndex.value = swiper.swiper.realIndex
        })
    }
})
</script>

<template>
    <div class="w-full max-w-[780px]">
        <ClientOnly>
            <swiper-container class="" ref="swiperRef" :effect="'coverflow'" :grabCursor="true" :centeredSlides="true"
                :slidesPerView="2.4" :loop="true" :coverflowEffect="{
                    rotate: 0,
                    stretch: -48,
                    depth: 200,
                    modifier: 5,
                    slideShadows: true,
                }" :breakpoints="{
                    320: {

                        coverflowEffect: {
                            stretch: -20,
                            modifier: 3,

                        }
                    },
                    640: {

                        coverflowEffect: {
                            stretch: -32,

                        }
                    },
                    1024: {
                        slidesPerView: 2.4,
                        coverflowEffect: {
                            stretch: -40,

                        }
                    }
                }">
                <swiper-slide v-for="(slide, idx) in 10" :key="idx">
                    <img class="shadow-md" src="~/assets/img/guarantee-1.webp" alt="">
                </swiper-slide>
            </swiper-container>
        </ClientOnly>
    </div>
</template>

<style scoped></style>
