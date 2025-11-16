<script setup lang="ts">
const props = defineProps<{
    brand: MainBrand
}>()


</script>

<template>
    <div>
        <div class="container">
            <UITitle class="mb-7 md:mb-27 font-bold text-center" :title="brand.title" />
            <div class="flex flex-wrap items-center justify-center gap-y-12 md:gap-y-24 gap-x-10 md:gap-x-20">
                <div class="brand-item" v-for="brandItem in brand.items" :key="brandItem.id">
                    <img :src="brandItem.image" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="css">
.brand-item {
    @media(max-width: 768px) {
        width: 33%;
    }
}
</style>