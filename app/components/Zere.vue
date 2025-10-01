<script setup lang="ts">

</script>

<template>
    <div>
        <div class="container">
            <UITitle class="lg:hidden block text-center mb-6" title="Zere Construction" />
            <div class="flex flex-col-reverse lg:flex-row items-center gap-y-6">
                <div class="flex flex-col gap-y-6 md:gap-y-10 lg:max-w-[572px] xl:max-w-[672px]">
                    <UITitle class=" hidden lg:block" title="Zere Construction" />
                    <p class="text-center md:text-left">
                        ТОО Ай Электро Лин является частью компании ТОО Zere Construction Ltd .
                        Вместе мы реализуем проекты от идеи до ввода в эксплуатацию: строим, оснащаем, обеспечиваем
                        надежность и безопасность.
                    </p>
                    <div class="flex items-center justify-center lg:items-start lg:justify-start">
                        <NuxtLink class="py-4 px-20 bg-violet rounded-full text-white text-lg font-medium" to="/">
                            Узнать больше
                        </NuxtLink>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full h-full ">
                    <div class="max-w-[508px] max-h-[324px]">
                        <img class="w-full h-full object-cover" src="~/assets/img/zere.png" alt="Zere Logo">
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped lang="css"></style>