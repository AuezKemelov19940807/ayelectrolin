<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const props = defineProps<{
    activeMenuBurger: boolean
}>()

</script>

<template>
    <div class="bg-white fixed md:hidden w-full z-40 h-fit left-0 -top-full shadow-2xl 
         transition-all duration-500 ease-in-out 
         flex flex-col items-center justify-center gap-y-6 pb-6 pt-10 
         opacity-0 translate-y-[-20px]" :class="{
            'top-0 opacity-100 translate-y-0': activeMenuBurger
        }">
        <Menu />
        <button class="">
            <span class="text-violet text-2xl font-semibold ">
                {{ $t('submit_application') }}
            </span>
        </button>

        <ul class="flex gap-x-12 uppercase py-2 px-4  shadow-[var(--shadow-custom)] rounded-lg">
            <li v-for="item in locales" :key="item.code" @click="setLocale(item.code)" :class="[
                'cursor-pointer',
                locale === item.code ? 'text-violet' : 'opacity-50'
            ]">
                <span class="text-2xl font-semibold">
                    {{ item.code }}
                </span>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="css"></style>