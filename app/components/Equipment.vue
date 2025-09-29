<script setup lang="ts">

</script>

<template>
    <div class="mb-24">
        <div class="container">
            <div
                class="flex flex-col gap-y-4 md:gap-y-8 lg:gap-y-10 xl:flex-row items-center justify-between mb-4 md:mb-10 lg:mb-20">
                <UITitle
                    class="relative before:absolute text-center xl:text-left before:bottom-0 xl:before:bg-transparent before:left-1/2 before:-translate-1/2 before:w-16 lg:before:w-24 pb-4 xl:pb-0 before:h-[1px] before:bg-[#282460]"
                    title="Наше оборудование" />
                <p
                    class="text-black text-base text-center md:text-left md:text-lg relative xl:before:absolute xl:before:left-0 xl:before:top-0 xl:before:h-full xl:before:w-0.5 xl:before:bg-violet xl:pl-5 xl:max-w-2xl 2xl:max-w-3xl">
                    Мы нацелены на постоянное совершенствование, внедрение инновационных решений и развитие
                    профессиональных
                    компетенций, чтобы соответствовать самым высоким требованиям отрасли и опережать ожидания
                    заказчиков.
                </p>
            </div>
            <div class="items-center justify-center grid md:grid-cols-2 gap-6 md:gap-10 lg:flex">
                <EquipmentItem v-for="(value, index) in 4" :class="{ 'lg:-ml-20': index !== 0 }" />
            </div>
        </div>
    </div>

</template>

<style scoped lang="css"></style>