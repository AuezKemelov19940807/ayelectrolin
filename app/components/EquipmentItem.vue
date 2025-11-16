<script setup lang="ts">

const props = defineProps<{
    title: string;
    image: string;
    largeImage: string
}>()



</script>

<template>
    <div class="flex flex-col items-center justify-center h-full w-full cursor-pointer">
        <div
            class="max-w-[226px] sm:max-w-[460px] max-h-[226px] sm:max-h-[460px] w-full aspect-square  rounded-full overflow-hidden mb-4 md:mb-8 relative bg-position-center bg-no-repeat bg-cover">
            <img class="w-full h-full  object-cover" :src="image" alt="Equipment Item Image">
        </div>
        <p class="text-center text-lg lg:px-10 2xl:px-0  xl:text-2xl font-semibold mt-auto">
            {{ title }}

        </p>
    </div>
</template>

<style scoped lang="css"></style>