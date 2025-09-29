<script setup lang="ts">

</script>

<template>
    <div class="flex  mt-46 lg:pt-0 items-center pb-18 lg:pb-24 2xl:pb-40 ">
        <div class="container">
            <div class="flex flex-col-reverse gap-y-10 lg:gap-y-0 lg:flex-row items-center  gap-x-10 ">
                <div class="max-w-4xl flex flex-col  items-center md:items-start gap-y-4">
                    <h1 class="text-2xl md:text-4xl lg:text-5xl text-center md:text-left font-bold lg:leading-16">
                        Собственное производство шкафов <span class="text-violet">РЗА</span>
                    </h1>
                    <p class="font-semibold text-lg lg:text-2xl text-center md:text-left">Надежные решения для любых
                        задач.</p>
                    <ApplicationForm class="" />
                </div>
                <div class="relative w-full max-w-[551px] aspect-[551/453] bg -z-10">
                    <img class="w-full h-full object-cover absolute left-0 top-0" src="~/assets/img/banner.png"
                        alt="Banner Image">
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang="css">
.bg::before {
    content: '';
    position: absolute;
    background: #6E3F88;
    width: 90%;
    height: 110%;
    border-radius: 100%;
    left: 65%;
    top: 45%;
    transform: translate(-50%, -50%);
    z-index: -1;

    @media(max-width: 768px) {
        left: 12%;
    }
}
</style>