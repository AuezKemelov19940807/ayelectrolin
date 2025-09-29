<script setup lang="ts">

</script>

<template>
    <div class="md:pt-24 mb-72">
        <div class="container">
            <div class="flex flex-col xl:flex-row gap-y-8 md:gap-y-10 xl:items-center justify-between gap-x-10 ">
                <div class="xl:max-w-[600px] flex flex-col gap-y-4 md:gap-y-10">
                    <UITitle title="Основные приоритеты работы" />
                    <p class="text-base">Наши приоритеты — это надежность, оперативность и внимание к деталям. Мы
                        обеспечиваем высокое качество продукции и гибко подстраиваемся под задачи каждого клиента.</p>
                    <NuxtLink to="/catalogs"
                        class="hidden text-white xl:inline-block w-fit bg-violet py-4 px-12 rounded-4xl">
                        Посмотреть
                        каталог
                    </NuxtLink>
                </div>
                <div class="grid xl:grid-cols-2 gap-y-8 gap-x-11">

                    <div
                        class="flex flex-col h-full gap-y-4 border-t xl:border-none pt-4 xl:pt-0 border-violet xl:max-w-96 relative xl:before:absolute xl:before:left-0 xl:before:-bottom-4 xl:before:w-[580px] xl:before:h-[1px] xl:before:bg-violet   ">
                        <p class="text-2xl font-semibold flex-1 ">Высокая скорость производства</p>
                        <p class="text-base">Быстро производим и отгружаем продукцию, гарантируя долговечность и
                            надежность щитков</p>
                    </div>
                    <div
                        class="flex flex-col gap-y-4 border-t xl:border-none pt-4 xl:pt-0 border-violet xl:max-w-96 h-full relative xl:before:absolute xl:before:-left-6 xl:before:top-8 xl:before:w-[1px] xl:before:h-[240px] xl:before:bg-violet">
                        <p class="text-2xl font-semibold flex-1 ">Качество и надежность</p>
                        <p class="text-base">Наши щитки соответствуют стандартам безопасности и защищают от замыканий,
                            перегрузок и сбоев </p>
                    </div>
                    <div
                        class="flex flex-col gap-y-4 border-t xl:border-none pt-4 xl:pt-0 border-violet xl:max-w-96 h-full  ">
                        <p class="text-2xl font-semibold flex-1 ">Большой склад</p>
                        <p class="text-base">Широкий ассортимент комплектующих в наличии, что позволяет оперативно
                            выполнять заказы. </p>
                    </div>
                    <div
                        class="flex flex-col gap-y-4 border-t xl:border-none pt-4 xl:pt-0 border-violet xl:max-w-96 h-full">
                        <p class="text-2xl font-semibold flex-1 ">Индивидуальный подход</p>
                        <p class="text-base">Создаем решения, полностью соответствующие вашим условиям и требованиям</p>
                    </div>

                </div>
                <div class="xl:hidden flex items-center justify-center">
                    <NuxtLink to="/" class=" text-white  inline-block w-fit bg-violet py-4 px-12 rounded-4xl">
                        Посмотреть
                        каталог
                    </NuxtLink>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped lang="css"></style>