<script setup lang="ts">
import item1 from "~/assets/img/item-1.webp";
import item2 from "~/assets/img/item-2.webp";
import item3 from "~/assets/img/item-3.webp";
import item4 from "~/assets/img/item-4.webp";

interface EquipmentItem {
    id: number;
    name: string;
    image: string;
}


const equipmentItems: EquipmentItem[] = [
    {
        id: 1,
        name: 'Лазерные ЧПУ',
        image: item1
    },
    {
        id: 2,
        name: 'Гильотина',
        image: item2
    },
    {
        id: 3,
        name: 'Листогибочные станки',
        image: item3
    },
    {
        id: 4,
        name: 'Оборудование для медных и алюминиевых шин',
        image: item4
    }
]

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
                        :key="item.id" :name="item.name" :image="item.image" />
                </div>
            </div>

        </div>
    </div>

</template>

<style scoped lang="css"></style>