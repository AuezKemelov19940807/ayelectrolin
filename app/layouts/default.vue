<script setup lang="ts">


</script>

<template>
    <NuxtLoadingIndicator />
    <div class="h-full flex flex-col">
        <Header />
        <main class="flex-1">
            <slot />
        </main>
        <Footer />
        <Modal />
    </div>
</template>

<style lang="css"></style>
