<script setup lang="ts">

</script>

<template>
    <div class="flex  mt-40 md:mt-46 lg:pt-0 items-center">
        <div class="container">
            <div class="flex flex-col-reverse gap-y-10 lg:gap-y-0 lg:flex-row items-center justify-between  gap-x-10 ">
                <div class="max-w-4xl flex flex-col  items-center lg:items-start gap-y-4">
                    <h1
                        class="text-2xl md:text-4xl xl:text-5xl   text-center md:text-left font-bold leading-[130%] xl:leading-16">
                        Собственное производство шкафов <span class="text-violet">РЗА</span>
                    </h1>
                    <p class="font-semibold text-lg lg:text-2xl text-center lg:text-left">Надежные решения для любых
                        задач.</p>
                    <ApplicationForm class="" />
                </div>
                <div class="relative bg mr-14 md:mr-20 ">
                    <div class=" w-full h-full max-w-[551px] max-h-[453px]   -z-10 ">
                        <img class="w-full h-full object-cover  md:min-w-[551px] md:min-h-[453px] left-0 top-0"
                            src="~/assets/img/banner.png" alt="Banner Image">
                    </div>
                </div>




            </div>
        </div>
    </div>

</template>

<style scoped lang="css">
.bg::before {
    content: '';
    position: absolute;
    background: url('../assets/img/ellipse.png') no-repeat;
    width: 494px;
    height: 494px;
    z-index: -10;
    left: 50%;
    margin: -20px 0px 0px 110px;
    top: 50%;
    transform: translate(-50%, -50%);

    @media(max-width: 768px) {

        content: '';
        position: absolute;
        background: #6E3F88;
        width: 90%;
        height: 110%;
        border-radius: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        margin: -20px 0px 0px 80px;


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