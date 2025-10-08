<script setup lang="ts">

</script>

<template>
    <div>
        <div class="container">

            <div class="flex items-center justify-center flex-col mb-10">
                <p class="flex flex-col text-center text-2xl md:text-4xl lg:text-5xl font-bold leading-[130%] mb-6">
                    Выполненные проекты
                </p>
                <p class="text-center max-w-[900px] ">
                    Ай Электро Лин реализует надёжные и индивидуальные решения по сборке электрощитов для
                    промышленных, коммерческих и жилых объектов.
                </p>
            </div>
            <div
                class="flex flex-col-reverse md:flex-row gap-y-2.5 md:gap-y-4 gap-x-2.5 md:gap-x-4 lg:gap-x-6 items-center ">
                <div class="basis-2/5 w-full ">

                    <div class="flex flex-col-reverse md:flex-col gap-y-2.5 md:gap-y-4 lg:gap-y-6">
                        <div class="pb-[34.30%] min-h-[171px] md:min-h-full rounded-2xl overflow-hidden relative">
                            <div class="absolute left-0 top-0 w-full h-full ">
                                <img class="w-full h-full object-cover" src="~/assets/img/project-7.webp" alt="">
                            </div>
                        </div>
                        <div class="flex gap-x-2.5 md:gap-x-4 lg:gap-x-6 md:flex-col gap-y-2.5 md:gap-y-4 lg:gap-y-6">
                            <div class=" rounded-2xl w-full overflow-hidden pb-[57.1%] relative">
                                <div class="absolute left-0 top-0 w-full h-full ">
                                    <img class="w-full h-full object-cover" src="~/assets/img/project-1.webp" alt="">
                                </div>
                            </div>
                            <div class="pb-[43.20%] w-full rounded-2xl overflow-hidden relative">
                                <div class="absolute left-0 top-0 w-full h-full ">
                                    <img class="w-full h-full object-cover" src="~/assets/img/project-2.webp" alt="">
                                </div>
                            </div>
                        </div>



                    </div>


                </div>
                <div class="basis-3/5 w-full">
                    <div class="flex flex-col gap-y-2.5 md:gap-y-4 lg:gap-y-6">
                        <div class="flex gap-x-2.5 md:gap-x-4 lg:gap-x-6 ">
                            <div class="relative basis-1/2 md:basis-2/5 pb-[38%] rounded-2xl overflow-hidden ">
                                <div class="absolute left-0 top-0 w-full h-full ">
                                    <img class="w-full h-full object-cover" src="~/assets/img/project-3.webp" alt="">
                                </div>
                            </div>
                            <div
                                class="relative basis-1/2 min-h-[171px] md:min-h-full md:basis-3/5 pb-[38%]  rounded-2xl overflow-hidden">
                                <div class="absolute left-0 top-0 w-full h-full ">
                                    <img class="w-full h-full object-cover" src="~/assets/img/project-4.webp" alt="">
                                </div>
                            </div>

                        </div>
                        <div
                            class="flex flex-col gap-y-2.5 md:gap-y-4 lg:gap-y-6 md:flex-row gap-x-2.5 md:gap-x-4 lg:gap-x-6">
                            <div class="basis-[52.6%] h-full pb-[54.30%]  relative rounded-2xl overflow-hidden ">
                                <div class="absolute left-0 top-0 w-full h-full ">
                                    <img class="w-full h-full object-cover" src="~/assets/img/project-5.webp" alt="">
                                </div>
                            </div>
                            <div class="basis-[47.4%] pb-[54.30%] relative rounded-2xl overflow-hidden ">
                                <div class="absolute left-0 top-0 w-full h-full ">
                                    <img class="w-full h-full object-cover" src="~/assets/img/project-6.webp" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="parent">
                <div class="div1">
                    <UITitle class="mb-6" title="Выполненные проекты" />
                    <p>
                        Ай Электро Лин реализует надёжные и индивидуальные решения по сборке электрощитов для
                        промышленных, коммерческих и жилых объектов.
                    </p>
                </div>
                <div class="div2  relative">
                    <img class=" rounded-[30px]   w-full h-full object-cover" src="~/assets/img/project-2.png" alt="">
                </div>
                <div class="div4">
                    <img class="w-full h-full object-cover" src="~/assets/img/project-2.png" alt="">
                </div>
                <div class="div5">
                    <img class="w-full h-full object-cover" src="~/assets/img/project-2.png" alt="">
                </div>
                <div class="div8">
                    <img class="w-full h-full object-cover" src="~/assets/img/project-2.png" alt="">
                </div>
                <div class="div9">
                    <img class="w-full h-full object-cover" src="~/assets/img/project-2.png" alt="">
                </div>
                <div class="div10">
                    <img class="w-full h-full object-cover" src="~/assets/img/project-2.png" alt="">
                </div>
            </div> -->

        </div>
    </div>
</template>

<style scoped lang="css">
.parent {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(7, 1fr);
    gap: 24px;
}

.div1 {
    grid-column: span 3 / span 3;
    grid-row: span 2 / span 2;
}

.div2 {
    grid-column: span 3 / span 3;
    grid-row: span 3 / span 3;
    grid-column-start: 4;
}

.div4 {
    grid-column: span 3 / span 3;
    grid-row: span 3 / span 3;
    grid-column-start: 1;
    grid-row-start: 3;
}

.div5 {
    grid-column: span 3 / span 3;
    grid-row: span 2 / span 2;
    grid-column-start: 1;
    grid-row-start: 6;
}

.div8 {
    grid-column: span 4 / span 4;
    grid-row: span 3 / span 3;
    grid-column-start: 7;
    grid-row-start: 1;
}

.div9 {
    grid-column: span 4 / span 4;
    grid-row: span 4 / span 4;
    grid-column-start: 4;
    grid-row-start: 4;
}

.div10 {
    grid-column: span 3 / span 3;
    grid-row: span 4 / span 4;
    grid-column-start: 8;
    grid-row-start: 4;
}
</style>