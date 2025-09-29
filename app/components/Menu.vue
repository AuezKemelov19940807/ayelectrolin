<script setup lang="ts">

</script>

<template>
    <nav>
        <ul
            class="flex gap-y-6 text-2xl text-violet md:text-black md:text-lg font-semibold md:font-medium flex-col md:flex-row gap-x-6">
            <li>
                <NuxtLink to="/"> {{ $t('catalog') }} </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="css"></style>