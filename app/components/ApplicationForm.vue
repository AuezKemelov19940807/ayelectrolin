<script setup lang="ts">
const props = defineProps<{
    text: string
}>()
</script>

<template>
    <button class="btn">
        <span class="text-lg">{{ text }}</span>
    </button>
</template>

<style scoped lang="css"></style>
