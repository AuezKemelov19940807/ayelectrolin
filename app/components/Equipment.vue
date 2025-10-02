<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import item1 from "~/assets/img/item-1.webp";
import item2 from "~/assets/img/item-2.webp";
import item3 from "~/assets/img/item-3.webp";
import item4 from "~/assets/img/item-4.webp";
import item1LargImage from '~/assets/img/laser-machines.webp'
import item2LargImage from '~/assets/img/gilotina.webp'
import item3LargImage from '~/assets/img/sheet-bending-machine.webp'
import item4LargImage from '~/assets/img/aluminium.webp'

interface EquipmentItem {
    id: number;
    name: string;
    image: string;
    largeImage: string;
}


const equipmentItems: EquipmentItem[] = [
    {
        id: 1,
        name: 'Лазерные ЧПУ',
        image: item1,
        largeImage: item1LargImage
    },
    {
        id: 2,
        name: 'Гильотина',
        image: item2,
        largeImage: item2LargImage
    },
    {
        id: 3,
        name: 'Листогибочные станки',
        image: item3,
        largeImage: item3LargImage
    },
    {
        id: 4,
        name: 'Оборудование для медных и алюминиевых шин',
        image: item4,
        largeImage: item4LargImage
    }
]


// храню id выбранного элемента
const selectedId = ref<number | null>(null)

const largeImageRef = ref<HTMLElement | null>(null)

const openLargeImage = (id: number) => {
    selectedId.value = id
}

const closeLargeImage = () => {
    selectedId.value = null
}

// закрытие по клику вне картинки
onClickOutside(largeImageRef, closeLargeImage)

// вычисляем выбранный элемент
const selectedItem = computed(() =>
    equipmentItems.find(item => item.id === selectedId.value) || null
)

</script>

<template>
    <div class="">
        <div class="container">
            <div>
                <div
                    class="flex flex-col gap-y-4 md:gap-y-8 lg:gap-y-10 xl:flex-row items-center justify-between mb-4 md:mb-10 lg:mb-20">
                    <UITitle
                        class="relative before:absolute text-center xl:text-left before:bottom-0 xl:before:bg-transparent before:left-1/2 before:-translate-1/2 before:w-16 lg:before:w-24 pb-4 xl:pb-0 before:h-[1px] before:bg-[#282460]"
                        title="Производственный парк" />
                    <p
                        class="text-black text-base text-center md:text-left md:text-lg relative xl:before:absolute xl:before:left-0 xl:before:top-0 xl:before:h-full xl:before:w-0.5 xl:before:bg-violet xl:pl-5 xl:max-w-2xl 2xl:max-w-3xl">
                        Мы используем современное высокотехнологичное оборудование и производственные линии, которые
                        позволяют выпускать продукцию в соответствии с самыми строгими отраслевыми стандартами
                    </p>
                </div>
                <div class="grid sm:grid-cols-2 lg:flex lg:flex-nowrap gap-6">
                    <EquipmentItem :class="{ 'lg:-ml-20': index !== 0 }" v-for="(item, index) in equipmentItems"
                        :key="item.id" :name="item.name" :image="item.image" :largeImage="item.largeImage"
                        @click="openLargeImage(item.id)" />
                </div>
            </div>

        </div>
    </div>
    <Transition name="slide-fade">
        <div v-if="selectedItem"
            class="fixed w-full z-50 h-full left-0 top-0 before:absolute before:w-full before:h-full before:bg-black before:left-0 before:top-0 before:z-10 before:opacity-50">
            <div class=" absolute min-w-[300px] max-w-[700px] max-h-[700px] top-1/2 z-50 left-1/2  -translate-x-1/2 -translate-y-1/2"
                ref="largeImageRef">
                <span
                    class="absolute  w-6  h-6 sm:w-fit sm:h-fit -top-6 sm:-top-10 -right-4  sm:-right-12 cursor-pointer"
                    @click="closeLargeImage">
                    <img src="~/assets/img/close-white.svg" alt="">
                </span>

                <p class="text-white tex-center mb-2 sm:text-xl "> "{{ selectedItem.name }}" </p>

                <img class="w-full h-full object-cover rounded-2xl " :src="selectedItem.largeImage" alt="">
            </div>

        </div>
    </Transition>
</template>

<style scoped lang="css">
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