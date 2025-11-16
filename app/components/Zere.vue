<script setup lang="ts">
const props = defineProps<{
    company: MainCompany
}>()

</script>

<template>
    <div>
        <div class="container">
            <UITitle class="lg:hidden block text-center mb-6" :title="company.title" />
            <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-y-6">
                <div class="flex flex-col gap-y-6 md:gap-y-10 lg:max-w-[572px] xl:max-w-[672px]">
                    <UITitle class=" hidden lg:block" :title="company.title" />
                    <p class="text-center md:text-left text-base lg:text-lg ">
                        {{ company.description }}
                    </p>
                </div>
                <div class="md:pr-20">
                    <div class="max-w-[250px]  md:max-w-full ">
                        <img :src="company.image" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="css"></style>