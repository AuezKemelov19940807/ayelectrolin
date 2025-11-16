<script setup lang="ts">


</script>

<template>
    <NuxtLoadingIndicator />
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
