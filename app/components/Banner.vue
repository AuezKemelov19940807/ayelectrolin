<script setup lang="ts">

const props = defineProps<{
    banner: MainBanner
}>()


const { open } = useModal()

</script>

<template>
    <section class="flex mt-30 md:mt-0 lg:pt-0 items-center">
        <div class="container">
            <div class="flex flex-col-reverse gap-y-10 lg:gap-y-0 lg:flex-row items-center justify-between  gap-x-10 ">
                <div class="max-w-4xl flex flex-col  items-center lg:items-start gap-y-4">
                    <h1 class="text-2xl md:text-4xl xl:text-5xl   text-center md:text-left font-bold  xl:leading-16">
                        {{ banner.title }}
                    </h1>
                    <p class="font-semibold text-lg lg:text-2xl text-center lg:text-left">
                        {{ banner.subtitle }}
                    </p>
                    <ApplicationForm class="relative z-50" v-if="banner.btnText" :text="banner.btnText" @click="open" />
                </div>
                <div class="relative bg mr-14 md:mr-20">
                    <div class=" w-full h-full max-w-[700px] max-h-[600px]">
                        <img class="w-full h-full object-cover  md:min-w-[700px] md:min-h-[600px] left-0 top-0"
                            :src="banner.image" alt="Banner Image">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="css">
.bg {
    position: relative;
    z-index: 2;
}

.bg::before {
    content: '';
    position: absolute;
    background: linear-gradient(90deg, #6E3F88 0%, #B95BCF 100%);
    width: 494px;
    height: 494px;
    z-index: -1;
    left: 50%;
    top: 50%;
    margin: 35px 0 0 110px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    /* чтобы форма была круглая */
}

@media(max-width: 768px) {
    .bg::before {
        width: 90%;
        height: 90%;
        margin: 0 0 0 80px;
    }
}

@media(max-width: 450px) {
    .bg::before {
        margin: -10px 0 0 80px;
    }
}

/* 
.bg::before {
    content: '';
    position: absolute;
    background: url('../assets/img/ellipse.png') no-repeat center/contain;
    width: 40vw;
    height: 40vw;
    z-index: -10;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
} */
</style>