<script lang="ts" setup>

const props = defineProps<{
    project: MainProject
}>()


</script>

<template>
    <div>
        <div class="container">

            <div class="flex items-center justify-center flex-col mb-10">
                <p class="flex flex-col text-center text-2xl md:text-4xl lg:text-5xl font-bold leading-[130%] mb-6">
                    {{ project.title }}
                </p>
                <p class="text-center max-w-[900px] ">
                    {{ project.subtitle }}
                </p>
            </div>
            <div
                class="flex flex-col-reverse md:flex-row gap-y-2.5 md:gap-y-4 gap-x-2.5 md:gap-x-4 lg:gap-x-6 items-center ">
                <div class="basis-2/5 w-full ">

                    <div class="flex flex-col-reverse md:flex-col gap-y-2.5 md:gap-y-4 lg:gap-y-6">
                        <div class="pb-[34.30%] min-h-[171px] md:min-h-full rounded-2xl overflow-hidden relative">
                            <div class="absolute left-0 top-0 w-full h-full ">
                                <img class="w-full h-full object-cover" :src="project.image_7" alt="">
                            </div>
                        </div>
                        <div class="flex gap-x-2.5 md:gap-x-4 lg:gap-x-6 md:flex-col gap-y-2.5 md:gap-y-4 lg:gap-y-6">
                            <div class=" rounded-2xl w-full overflow-hidden pb-[57.1%] relative">
                                <div class="absolute left-0 top-0 w-full h-full ">
                                    <img class="w-full h-full object-cover" :src="project.image_1" alt="">
                                </div>
                            </div>
                            <div class="pb-[43.20%] w-full rounded-2xl overflow-hidden relative">
                                <div class="absolute left-0 top-0 w-full h-full ">
                                    <img class="w-full h-full object-cover" :src="project.image_2" alt="">
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
                                    <img class="w-full h-full object-cover" :src="project.image_3" alt="">
                                </div>
                            </div>
                            <div
                                class="relative basis-1/2 min-h-[171px] md:min-h-full md:basis-3/5 pb-[38%]  rounded-2xl overflow-hidden">
                                <div class="absolute left-0 top-0 w-full h-full ">
                                    <img class="w-full h-full object-cover" :src="project.image_4" alt="">
                                </div>
                            </div>

                        </div>
                        <div
                            class="flex flex-col gap-y-2.5 md:gap-y-4 lg:gap-y-6 md:flex-row gap-x-2.5 md:gap-x-4 lg:gap-x-6">
                            <div class="basis-[52.6%] h-full pb-[54.30%]  relative rounded-2xl overflow-hidden ">
                                <div class="absolute left-0 top-0 w-full h-full ">
                                    <img class="w-full h-full object-cover" :src="project.image_5" alt="">
                                </div>
                            </div>
                            <div class="basis-[47.4%] pb-[54.30%] relative rounded-2xl overflow-hidden ">
                                <div class="absolute left-0 top-0 w-full h-full ">
                                    <img class="w-full h-full object-cover" :src="project.image_6" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="css"></style>