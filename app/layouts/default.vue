<script setup lang="ts">


const route = useRoute()

watch(
    () => route.fullPath,
    () => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }
)
</script>

<template>
    <div class="flex flex-col h-full">
        <Header />
        <main class="flex-1">
            <slot />
        </main>
        <Footer />
        <Modal />
    </div>



</template>

<style lang="css"></style>
