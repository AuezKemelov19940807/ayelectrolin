<script setup lang="ts">
const props = defineProps<{
    guarantee: MainGuarantee
}>()

</script>

<template>
    <div>
        <div class="container">
            <div
                class="flex flex-col-reverse xl:flex-row gap-y-6 md:gap-y-10 justify-between items-center gap-x-10 2xl:gap-x-40">
                <div class="flex-1/2 max-w-[718px]">
                    <div class="flex  justify-center sm:justify-start gap-x-1 mb-4 sm:hidden ">
                        <span class="w-12 h-12 md:w-18 md:h-18">
                            <img src="~/assets/img/st.webp" alt="">
                        </span>
                        <h2 class="font-bold  text-center md:text-left -mt-1 md:-mt-3 text-2xl lg:text-[45px] ">
                            {{ guarantee.title }}
                        </h2>

                    </div>

                    <div class="hidden  justify-center xl:justify-start gap-x-1  sm:flex ">
                        <span class="w-18 h-18">
                            <img src="~/assets/img/st.webp" alt="">
                        </span>
                        <h2 class="font-bold  text-left -mt-3 text-[45px] ">
                            {{ guarantee.title }} </h2>
                    </div>
                    <div class="flex flex-col gap-y-4 sm:gap-y-6">
                        <div class="flex flex-col gap-y-2.5 sm:gap-y-4 border border-violet rounded-lg py-2 px-4"
                            v-for="block in guarantee.blocks" :key="block.id">
                            <p class="font-semibold text-lg sm:text-2xl"> {{ block.title }} </p>
                            <p class="text-sm sm:text-base text-black">
                                {{ block.description }}
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Swiper -->
                <GuaranteeSwiper :swipers="guarantee.swipers" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="css"></style>