<template>
    <div class="flex flex-col h-full bg">
        <Header />
        <div class="flex-1">
            <slot />
        </div>
        <Footer />

    </div>
</template>

<style lang="css">
.bg::before {
    content: '';
    position: absolute;
    background: url('../assets/img/vector.png') no-repeat;
    width: 100%;

    background-size: cover;
    height: 100%;
    top: -250px;
    z-index: -1;
    left: -200px;


    @media(max-width: 768px) {
        background-size: auto;
        left: 0px;
    }






}
</style>
