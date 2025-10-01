<script setup lang="ts">
const props = defineProps<{
    text: string
}>()

</script>

<template>
    <button class="bg-violet w-fit px-4 py-2 rounded-4xl cursor-pointer">
        <span class="text-white text-lg">
            {{ text }}
        </span>
    </button>
</template>

<style scoped lang="css"></style>