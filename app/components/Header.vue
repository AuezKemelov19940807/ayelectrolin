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
    <header class="mt-2.5  md:mt-6 z-40 fixed md:relative bg ">
        <div class="container">
            <div class="flex items-center justify-between relative">
                <logo />
                <Burger :activeMenuBurger="activeMenuBurger" :handleClickActiveMenuBurger="handleClickActiveMenuBurger"
                    :closeActiveMenuBurger="closeActiveMenuBurger" />
                <div class="hidden md:flex relative z-50 items-center gap-x-6  ">
                    <Menu />
                    <ApplicationForm />
                    <Lang />
                </div>
            </div>

        </div>
        <BurgerMenu :activeMenuBurger="activeMenuBurger" />
    </header>
</template>

<style scoped lang="css">
@media(max-width: 768px) {
    .bg::before {
        content: '';
        position: fixed;
        width: 100%;
        height: 70px;
        background: white;
        left: 0;
        top: 0;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
    }
}
</style>