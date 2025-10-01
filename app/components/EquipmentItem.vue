<script setup lang="ts">
const props = defineProps<{
    name: string;
    image: string;
}>()

</script>

<template>
    <div class="flex flex-col h-full w-full ">
        <div
            class="max-w-[460px]  max-h-[460px] w-full aspect-square  rounded-full overflow-hidden mb-4 md:mb-8 relative bg-position-center bg-no-repeat bg-cover">
            <img class="w-full h-full  object-cover" :src="image" alt="Equipment Item Image">
        </div>
        <p class="text-center text-lg lg:px-10 2xl:px-0  xl:text-2xl font-semibold mt-auto">
            {{ name }}
        </p>
    </div>
</template>

<style scoped lang="css"></style>