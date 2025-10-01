<script setup lang="ts">

</script>

<template>
    <div>
        <div class="container">
            <UITitle class="mb-7 md:mb-27 font-bold text-center" title="Надёжные компоненты мировых брендов" />
            <div class="flex flex-wrap items-center justify-center gap-y-12 md:gap-y-24 gap-x-10 md:gap-x-20">
                <div class="brand-item">
                    <img src="~/assets/img/brand-1.png" alt="">
                </div>
                <div class="brand-item">
                    <img src="~/assets/img/brand-2.png" alt="">
                </div>
                <div class="brand-item">
                    <img src="~/assets/img/brand-3.png" alt="">
                </div>
                <div class="brand-item">
                    <img src="~/assets/img/brand-4.png" alt="">
                </div>
                <div class="brand-item">
                    <img src="~/assets/img/brand-5.png" alt="">
                </div>
                <div class="brand-item">
                    <img src="~/assets/img/brand-6.png" alt="">
                </div>
                <div class="brand-item">
                    <img src="~/assets/img/brand-7.png" alt="">
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