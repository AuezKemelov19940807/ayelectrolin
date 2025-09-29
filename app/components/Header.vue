<script setup lang="ts">

const activeMenuBurger = ref<boolean>(false)

// toggle menu burger
const handleClickActiveMenuBurger = () => {
    activeMenuBurger.value = !activeMenuBurger.value
}


const closeActiveMenuBurger = () => {
    activeMenuBurger.value = false
}




</script>

<template>
    <header class="mt-5  md:mt-6 fixed md:relative">
        <div class="container">
            <div class="flex items-center justify-between relative">
                <logo />
                <Burger :activeMenuBurger="activeMenuBurger" :handleClickActiveMenuBurger="handleClickActiveMenuBurger"
                    :closeActiveMenuBurger="closeActiveMenuBurger" />
                <div class="hidden md:flex items-center gap-x-6  ">
                    <Menu />
                    <ApplicationForm />
                    <Lang />
                </div>
            </div>

        </div>
        <BurgerMenu :activeMenuBurger="activeMenuBurger" />
    </header>
</template>

<style scoped lang="css"></style>