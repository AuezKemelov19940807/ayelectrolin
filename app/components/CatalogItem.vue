<script setup lang="ts">
const props = defineProps<{
    slug: string
    image: string
    title: string
}>()

const localePath = useLocalePath()

</script>

<template>
    <NuxtLink class="flex flex-col h-full gap-y-2.5 md:gap-y-6 cursor-pointer w-full max-w-[460px]"
        :to="localePath(`/catalog/${slug}`)">
        <div class="w-full relative rounded-2xl overflow-hidden pb-[100%] ">
            <div class="absolute left-0 top-0 w-full h-full bg-white ">
                <img class="w-full h-full object-contain " :src="image" alt="Catalog Image">
            </div>
        </div>

        <p class="text-xs md:text-lg lg:text-2xl flex-1 font-semibold leading-[130%]">
            {{ title }}
        </p>
        <span class="flex gap-x-2 items-center font-medium">
            <span class="text-xs md:text-lg text-violet font-medium">
                {{ $t('learn_more') }}
            </span>
            <span class="w-4 h-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path
                        d="M4.92164 2.60479C4.7584 2.77867 4.6667 3.01447 4.6667 3.26033C4.6667 3.50619 4.7584 3.74199 4.92164 3.91587L9.23166 8.50558L4.92164 13.0953C4.76303 13.2702 4.67527 13.5044 4.67725 13.7475C4.67924 13.9906 4.77081 14.2232 4.93224 14.3951C5.09368 14.567 5.31207 14.6645 5.54036 14.6666C5.76866 14.6687 5.98861 14.5753 6.15282 14.4064L11.0784 9.16112C11.2417 8.98724 11.3334 8.75144 11.3334 8.50558C11.3334 8.25971 11.2417 8.02392 11.0784 7.85004L6.15282 2.60479C5.98954 2.43096 5.76811 2.33331 5.53723 2.33331C5.30635 2.33331 5.08492 2.43096 4.92164 2.60479Z"
                        fill="#6E3F88" />
                </svg>
            </span>
        </span>
    </NuxtLink>
</template>

<style scoped lang="css"></style>