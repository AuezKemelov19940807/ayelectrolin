<script setup lang="ts">

</script>

<template>
    <div>
        <div class="container">
            <div class="flex flex-col xl:flex-row gap-y-8 md:gap-y-10 xl:items-center justify-between gap-x-10 ">
                <div class="xl:max-w-[600px] flex flex-col gap-y-4 md:gap-y-10">
                    <UITitle title="Основные приоритеты работы" />
                    <p class="text-lg">Наши приоритеты — это надежность, оперативность и внимание к деталям. Мы
                        обеспечиваем высокое качество продукции и гибко подстраиваемся под задачи каждого клиента.</p>
                    <NuxtLink to="/" class="hidden text-white xl:inline-block w-fit bg-violet py-4 px-12 rounded-4xl">
                        Посмотреть
                        каталог
                    </NuxtLink>
                </div>
                <div class="grid xl:grid-cols-2 gap-y-8 gap-x-11">

                    <div
                        class="flex flex-col h-full gap-y-4 border-t xl:border-none pt-4 xl:pt-0 border-violet xl:max-w-96 relative xl:before:absolute xl:before:left-0 xl:before:-bottom-4 xl:before:w-[580px] xl:before:h-[1px] xl:before:bg-violet   ">
                        <p class="text-2xl font-semibold flex-1 flex gap-x-2.5 items-center "> <span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960"
                                    width="48px" fill="#6E3F88">
                                    <path
                                        d="M407-325q23 23 66.5 21.5T537-336l216-339-335 219q-30 20-32 64t21 67Zm71-474q57 0 119 18.5T716-717l-52 37q-45-30-96.5-44.5T477.98-739q-140.47 0-239.23 100.22Q140-538.57 140-396.02 140-351 152.5-305q12.5 46 35.5 85h579q22-36 35-84t13-94q0-42-12.5-90.5T758-578l39-52q38 56 57 112.5T875-404q2 60-12 113t-41 98q-12 23-25.5 28t-33.5 5H192q-17 0-33.5-8.5T134-193q-26-48-40-97.5T80-396q0-83 31.5-156.5t85.5-128Q251-735 323.68-767T478-799Zm-9 331Z" />
                                </svg>
                            </span> <span>Высокая скорость производства</span> </p>
                        <p class="text-base">Быстро производим и отгружаем продукцию, гарантируя долговечность и
                            надежность щитков</p>
                    </div>
                    <div
                        class="flex flex-col gap-y-4 border-t xl:border-none pt-4 xl:pt-0 border-violet xl:max-w-96 h-full relative xl:before:absolute xl:before:-left-6 xl:before:top-8 xl:before:w-[1px] xl:before:h-[240px] xl:before:bg-violet">
                        <p class="text-2xl font-semibold flex-1 flex gap-x-2.5 items-center ">

                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960"
                                    width="48px" fill="#6E3F88">
                                    <path
                                        d="m436-347 228-228-42-41-183 183-101-101-44 44 142 143Zm44 266q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Zm0-62q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143Zm0-337Z" />
                                </svg>
                            </span><span>
                                Качество и надежность
                            </span>

                        </p>
                        <p class="text-base">Наши щитки соответствуют стандартам безопасности и защищают от замыканий,
                            перегрузок и сбоев

                             </p>
                    </div>
                    <div
                        class="flex flex-col gap-y-4 border-t xl:border-none pt-4 xl:pt-0 border-violet xl:max-w-96 h-full  ">
                        <p class="text-2xl font-semibold flex-1 flex gap-x-2.5 items-center ">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960"
                                    width="48px" fill="#6E3F88">
                                    <path
                                        d="m612-550 141-142-28-28-113 113-57-57-28 29 85 85ZM120-160v-60h480v60H120Zm519.89-290Q561-450 505.5-505.61q-55.5-55.6-55.5-134.5 0-78.89 55.61-134.39 55.6-55.5 134.5-55.5 78.89 0 134.39 55.61 55.5 55.6 55.5 134.5 0 78.89-55.61 134.39-55.6 55.5-134.5 55.5ZM120-500v-60h262q5.32 16.32 12.16 31.16T409-500H120Zm0 170v-60h419q13.8 6.36 29.4 10.68Q584-375 600-373v43H120Z" />
                                </svg>
                            </span>

                            <span>
                                Большой склад
                            </span>


                        </p>
                        <p class="text-base">Широкий ассортимент комплектующих в наличии, что позволяет оперативно
                            выполнять заказы. </p>
                    </div>
                    <div
                        class="flex flex-col gap-y-4 border-t xl:border-none pt-4 xl:pt-0 border-violet xl:max-w-96 h-full">
                        <p class="text-2xl font-semibold flex-1 flex gap-x-2.5 items-center ">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960"
                                    width="48px" fill="#6E3F88">
                                    <path
                                        d="M475-140q5 0 11.5-2.5T497-149l337-338q13-13 19.5-29.67Q860-533.33 860-550q0-17-6.5-34T834-614L654-794q-13-13-30-19.5t-34-6.5q-16.67 0-33.33 6.5Q540-807 527-794l-18 18 81 82q13 14 23 32.5t10 40.5q0 38-29.5 67T526-525q-25 0-41.5-7.5t-30.19-21.34L381-627 200-446q-5 5-7 10.53-2 5.52-2 11.84 0 12.63 8.5 21.13 8.5 8.5 21.17 8.5 6.33 0 11.83-3t9.5-7l138-138 42 42-137 137q-5 5-7 11t-2 12q0 12 9 21t21 9q6 0 11.5-2.5t9.5-6.5l138-138 42 42-137 137q-4 4-6.5 10.33-2.5 6.34-2.5 12.67 0 12 9 21t21 9q6 0 11-2t10-7l138-138 42 42-138 138q-5 5-7 11t-2 11q0 14 8 22t22 8Zm.06 60Q442-80 416-104.5t-31-60.62Q351-170 328-193t-28-57q-34-5-56.5-28.5T216-335q-37-5-61-30t-24-60q0-17 6.72-34.05Q144.45-476.1 157-489l224-224 110 110q8 8 17.33 12.5 9.34 4.5 18.67 4.5 13 0 24.5-11.5t11.5-24.65q0-5.85-3.5-13.35T548-651L405-794q-13-13-30-19.5t-34-6.5q-16.67 0-33.33 6.5-16.67 6.5-29.61 19.36L126-642q-14 14-19.5 29.5t-6.5 35q-1 19.5 7.5 38T128-506l-43 43q-20-22-32.5-53T40-579q0-30 11.5-57.5T84-685l151-151q22-22 49.79-32.5 27.8-10.5 57-10.5 29.21 0 56.71 10.5T448-836l18 18 18-18q22-22 49.79-32.5 27.8-10.5 57-10.5 29.21 0 56.71 10.5T697-836l179 179q22 22 33 50.03 11 28.04 11 57 0 28.97-11 56.47T876-444L539-107q-13 13-29.53 20t-34.41 7ZM377-626Z" />
                                </svg>
                            </span>
                            <span>
                                Индивидуальный подход
                            </span>

                        </p>
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