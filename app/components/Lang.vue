<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
const { locale, locales, setLocale } = useI18n()

const toggle = ref(false)

const langDropdown = ref<HTMLElement | null>(null)

const toggleLang = () => {
    toggle.value = !toggle.value
}

onClickOutside(langDropdown, () => {
    toggle.value = false
})

</script>

<template>
    <div class="relative uppercase">
        <div class="flex items-center gap-x-1.5  cursor-pointer" @click="toggleLang" ref="langDropdown">
            <span class="">
                {{ locale }}
            </span>
            <span class="transition-all duration-300" :class="toggle ? 'rotate-0' : '-rotate-180'">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M10.59 7.42L6 2.83L1.41 7.42L-1.2414e-07 6L6 2.43189e-06L12 6L10.59 7.42Z"
                        fill="#111111" />
                </svg>
            </span>
        </div>
        <Transition name="slide-fade">
            <div class="absolute bg-white shadow-md rounded-lg px-4 py-2 top-full  left-1/2 -translate-x-1/2 mt-2"
                v-if="toggle">
                <ul>
                    <li v-for="item in locales" :key="item.code" @click="setLocale(item.code)" :class="[
                        'cursor-pointer',
                        locale === item.code ? '' : 'opacity-50'
                    ]">
                        <span class="">
                            {{ item.code }}
                        </span>

                    </li>
                </ul>
            </div>
        </Transition>
    </div>
</template>

<style scoped lang="css">
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
}
</style>