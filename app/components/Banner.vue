<script setup lang="ts">


const { open } = useModal()

</script>

<template>
    <section class="flex mt-30 md:mt-0 lg:pt-0 items-center">
        <div class="container">
            <div class="flex flex-col-reverse gap-y-10 lg:gap-y-0 lg:flex-row items-center justify-between  gap-x-10 ">
                <div class="max-w-4xl flex flex-col  items-center lg:items-start gap-y-4">
                    <h1 class="text-2xl md:text-4xl xl:text-5xl   text-center md:text-left font-bold  xl:leading-16">
                        Собственное производство <span class="text-violet">электрощитов</span> 0,4 кВ –
                    </h1>
                    <p class="font-semibold text-lg lg:text-2xl text-center lg:text-left">
                        Профессиональное
                        решение под любые задачи
                    </p>
                    <ApplicationForm text="Оставить заявку" @click="open" />
                </div>
                <div class="relative bg mr-14 md:mr-20">
                    <div class=" w-full h-full max-w-[700px] max-h-[600px]">
                        <img class="w-full h-full object-cover  md:min-w-[700px] md:min-h-[600px] left-0 top-0"
                            src="~/assets/img/banner.webp" alt="Banner Image">
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
    background: url('../assets/img/ellipse.png') no-repeat;
    width: 494px;
    height: 494px;
    z-index: -1;
    left: 50%;
    margin: 35px 0px 0px 110px;
    top: 50%;
    transform: translate(-50%, -50%);

    @media(max-width: 768px) {

        content: '';
        position: absolute;
        background: #6E3F88;
        width: 90%;
        height: 90%;
        border-radius: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        margin: 0px 0px 0px 80px;


    }


    @media(max-width: 450px) {


        margin: -10px 0px 0px 80px;


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