<script setup lang="ts">
import Zere from '~/components/Zere.vue';




</script>

<template>
    <div class="bg mb-18 md:pt-24 lg:mb-72">
        <Banner class="pb-18 lg:pb-24 2xl:pb-40" />
        <Equipment />
    </div>
    <Priority class="mb-18 md:pt-24 lg:mb-72" />
    <!-- <Guarantee class="mb-18 md:mb-40" /> -->

    <Feedback class="mb-18 md:mb-48" />

    <Zere class="mb-18 md:mb-48" />

    <Brands class="mb-18 md:mb-48" />

    <Form class="mb-18 md:mb-30" />

</template>
<style scoped lang="css">
.bg {
    position: relative;
}

.bg::before {
    content: '';
    position: absolute;
    background: url('../assets/img/vector.png') no-repeat;
    width: 2755.9433212685367px;
    height: 2113.6398633527997px;
    z-index: -10;
    top: -260px;

    @media(max-width: 1024px) {

        top: -700px;

    }

    @media(max-width: 768px) {

        top: -800px;

    }



}
</style>
