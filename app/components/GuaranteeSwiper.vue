<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
const swiperRef = ref<any>(null)
const activeIndex = ref(4)

import guarantee1 from '~/assets/img/guarantee-1.webp'
import guarantee2 from '~/assets/img/guarantee-2.webp'
import guarantee3 from '~/assets/img/guarantee-3.webp'


const guaranteeItems: any = [
    {
        id: 1,
        image: guarantee1
    },
    {
        id: 2,
        image: guarantee2
    },
    {
        id: 3,
        image: guarantee3
    }
]


const showModal = ref(false)
const selectedImage = ref<string | null>(null)
const selectedImageRef = ref<HTMLElement | null>(null)

const openModal = (img: string) => {
    selectedImage.value = img
    showModal.value = true
}
const closeModal = () => {
    showModal.value = false
    selectedImage.value = null
}


// Следим за активным слайдом
watch(swiperRef, (swiper) => {
    if (swiper) {
        swiper.swiper.on("slideChange", () => {
            activeIndex.value = swiper.swiper.realIndex
        })
    }


    // swiper.swiper.on("tap", () => {
    //     const idx = swiper.swiper.clickedIndex;
    //     if (idx === swiper.swiper.realIndex) {
    //         openModal(guaranteeItems[idx].image)
    //     }
    // });

})

onClickOutside(selectedImageRef, closeModal)
</script>

<template>
    <div class="w-full max-w-[780px]">
        <ClientOnly>
            <swiper-container class="" ref="swiperRef" :effect="'coverflow'" :grabCursor="true" :centeredSlides="true"
                :slidesPerView="2.4" :loop="false" :initialSlide="1" :coverflowEffect="{
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
                <swiper-slide v-for="(slide, idx) in guaranteeItems" :key="slide.id" @click="openModal(slide.image)">
                    <img class="shadow-md w-full h-full " :src="slide.image" alt="Swiper Image">
                </swiper-slide>
            </swiper-container>
        </ClientOnly>
    </div>


    <Transition name="slide-fade">
        <div v-if="showModal"
            class="fixed w-full z-50 h-full left-0 top-0 before:absolute before:w-full before:h-full before:bg-black before:left-0 before:top-0 before:z-10 before:opacity-50">
            <div class=" absolute min-w-[320px] max-w-[600px] top-1/2 z-50 left-1/2  -translate-x-1/2 -translate-y-1/2"
                ref="selectedImageRef">
                <span
                    class="absolute  w-6  h-6 sm:w-fit sm:h-fit -top-6 sm:-top-10 -right-4  sm:-right-12 cursor-pointer"
                    @click="closeModal">
                    <img src="~/assets/img/close-white.svg" alt="">
                </span>


                <img class="w-full h-full object-cover rounded-2xl " :src="selectedImage!" alt="">
            </div>

        </div>
    </Transition>



</template>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>
