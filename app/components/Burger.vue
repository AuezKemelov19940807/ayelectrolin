<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
const props = defineProps<{
    activeMenuBurger: boolean
    handleClickActiveMenuBurger: () => void
    closeActiveMenuBurger: () => void
}>()



const burger = ref<HTMLElement | null>(null)



onClickOutside(burger, () => {
    props.closeActiveMenuBurger()
})


</script>

<template>
    <div class="md:hidden">
        <span :class="{ active: activeMenuBurger }" class="menu-icon lg:hidden z-50"
            @click="handleClickActiveMenuBurger" ref="burger">
            <span></span>
        </span>
    </div>
</template>

<style scoped lang="css">
.menu-icon {
    position: fixed;
    width: 30px;
    height: 18px;
    top: 25px;
    right: 10px;
    z-index: 50;
}

.menu-icon::before,
.menu-icon::after,
.menu-icon span {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #6E3F88;
    transition: all 0.3s ease 0s;
}

.menu-icon::before,
.menu-icon::after {
    content: '';
}

.menu-icon span {
    top: 50%;
    transform: scale(1) translate(0, -50%);
}

.menu-icon.active span {
    transform: scale(0);
}

.menu-icon.active::before {
    top: 50%;
    transform: rotate(-45deg);
}

.menu-icon.active::after {
    top: 50%;
    transform: rotate(45deg);
}

.menu-icon::before {
    top: 0;
}

.menu-icon::after {
    bottom: 0;
}
</style>