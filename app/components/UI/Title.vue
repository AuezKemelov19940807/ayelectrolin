<script setup lang="ts">
const props = defineProps<{
    title: string
}>()

</script>

<template>
    <h2 class="font-bold leading-[130%] text-2xl md:text-4xl  lg:text-5xl "> {{ title }} </h2>
</template>

<style scoped lang="css"></style>