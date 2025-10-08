<script setup lang="ts">
const route = useRoute()
import img2 from '~/assets/img/catalog-2.png'
import catalogSlug1 from '~/assets/img/catalog-slug-1.png'
import catalogSlug2 from '~/assets/img/catalog-slug-2.png'
import catalogSlug3 from '~/assets/img/catalog-slug-3.png'
import catalogSlug4 from '~/assets/img/catalog-slug-4.png'
import catalogSlug5 from '~/assets/img/catalog-slug-5.png'

const images = [
    img2,
    catalogSlug1,
    catalogSlug2,
    catalogSlug3,
    catalogSlug4,
    catalogSlug5
]

const slug = route.params.slug;


const activeImage = ref<string>(img2)

const setActiveImage = (img: string) => {
    activeImage.value = img
}

</script>

<template>
    <div class="pt-24 md:pt-10">
        <div class="container">
            <h4 class="block lg:hidden text-2xl text-center mb-6 font-bold"> ВРУ
                Вводно-распределительные устройства </h4>
            <div class="flex flex-col-reverse lg:flex-row gap-y-6 gap-x-16 mb-16 md:mb-48">
                <div class="basis-1/2 2xl:basis-3/5">
                    <h4 class=" hidden lg:block text-4xl mb-6 font-bold"> ВРУ
                        Вводно-распределительные устройства </h4>
                    <div class="flex flex-col gap-y-6">
                        <p>Устройства для приема и распределения электроэнергии, защиты линий от перегрузок и коротких
                            замыканий в сетях с трехфазным переменным током.
                        </p>
                        <p>

                            Разнообразный и богатый опыт сложившаяся структура организации обеспечивает широкому кругу
                            (специалистов) участие в формировании направлений прогрессивного развития. Значимость этих
                            проблем настолько очевидна.
                        </p>
                        <div>
                            <p class="font-semibold text-2xl mb-4">Технические детали</p>
                            <div class="flex flex-col gap-y-4 text-sm md:text-base">
                                <div class="flex items-center border-b pb-4 border-[#6E3F88]">
                                    <p class="flex-1/2">Наименование</p>
                                    <p class="flex-1/2">ВРУ – вводно-распределительные устройства</p>
                                </div>
                                <div class="flex items-center border-b pb-4 border-[#6E3F88]">
                                    <p class="flex-1/2">Ток</p>
                                    <p class="flex-1/2">От 16 А до 630 А</p>
                                </div>
                                <div class="flex items-center border-b pb-4 border-[#6E3F88]">
                                    <p class="flex-1/2">Количество вводов</p>
                                    <p class="flex-1/2">Один или два основных ввода, дополнительный ввод от
                                        дизель-генератора</p>
                                </div>
                                <div class="flex items-center border-b pb-4 border-[#6E3F88]">
                                    <p class="flex-1/2">Конструкция</p>
                                    <p class="flex-1/2">Исключает применение шкафов учета электроэнергии совместно с
                                        вводной панелью</p>
                                </div>
                                <div class="flex items-center border-b pb-4 border-[#6E3F88]">
                                    <p class="flex-1/2">Назначение</p>
                                    <p class="flex-1/2">ИПрием, распределение и учет электроэнергии напряжением 380/220В
                                        трехфазного переменного тока частотой 50 Гц Защита линий от перегрузок и
                                        коротких замыканий Нечастые оперативные включения и отключения электрических
                                        сетей (до 6 включений в час)</p>
                                </div>
                                <div class="flex items-center border-b pb-4 border-[#6E3F88]">
                                    <p class="flex-1/2">Сеть</p>
                                    <p class="flex-1/2">С глухозаземленной нейтралью</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div class="basis-1/2 2xl:basis-2/5">
                    <div class="relative mb-4 rounded-2xl overflow-hidden pb-[100%]">
                        <div class="absolute left-0 top-0 w-full h-full ">
                            <img class="w-full h-full object-cover" :src="activeImage" alt="Catalog Slug Image">
                        </div>
                    </div>
                    <ul class="flex gap-4 flex-wrap ">
                        <li v-for="(img, i) in images" :key="i"
                            class="rounded-2xl overflow-hidden w-20 h-20 cursor-pointer transition-all duration-200"
                            @click="setActiveImage(img)">
                            <img class="w-full h-full object-cover" :src="img" alt="" />
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="css"></style>