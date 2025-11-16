<script setup lang="ts">
const props = defineProps<{
    priority: MainPriority
}>()



</script>

<template>
    <div>
        <div class="container">
            <div class="flex flex-col xl:flex-row gap-y-8 md:gap-y-10 xl:items-center justify-between gap-x-10 ">
                <div class="xl:max-w-[600px] flex flex-col gap-y-4 md:gap-y-10">
                    <UITitle :title="priority.title" />
                    <p class="text-lg">
                        {{ priority.description }}
                    </p>
                    <NuxtLink :to="$localePath('/catalog')"
                        class="hidden text-white xl:inline-block w-fit bg-violet py-4 px-12 rounded-4xl text-lg btn">
                        {{ priority.btnText }}
                    </NuxtLink>
                </div>
                <div class="grid xl:grid-cols-2 gap-y-8 gap-x-11">
                    <div class="flex flex-col h-full gap-y-4 border-t xl:border-none pt-4 xl:pt-0 border-violet xl:max-w-96 relative xl:before:absolute xl:before:left-0 xl:before:-bottom-4 xl:before:w-full xl:before:h-[1px] xl:before:bg-violet"
                        v-for="block in priority.blocks" :key="block.id">
                        <p class="text-2xl font-semibold flex-1 flex gap-x-2.5 items-center "> <span>
                                <img :src="block.icon" alt="">
                            </span> <span>
                                {{ block.title }}
                            </span> </p>
                        <p class="text-base">
                            {{ block.description }}
                        </p>
                    </div>
                </div>
                <div class="xl:hidden flex items-center justify-center">
                    <NuxtLink :to="$localePath('/catalog')" class="btn">
                        <span class="text-center">
                            {{ priority.btnText }}
                        </span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="css">
/* From Uiverse.io by Codecite */
.btn {
    --fancy-button-gradient-0: #8d49fd;
    --fancy-button-gradient-50: #7f56f3;
    --fancy-button-gradient-100: #5691f3;
    --fancy-button-inner-shadow-top: rgba(233, 209, 255, 0.2);
    --fancy-button-inner-shadow-top-lg: rgba(9, 12, 60, 0.1);
    --fancy-button-inner-shadow-bottom: rgba(137, 222, 246, 0.3);
    --fancy-button-shine-top: #e9d1ff;
    --fancy-button-shine-bottom: #adfff9;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-shadow: 0px 0.5px 0.5px rgba(0, 0, 0, 0.2);
    padding: 16px 48px 16px 48px;
    margin: 0;
    appearance: none;
    border: none;
    outline: none;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    z-index: 1;
    border-radius: 25px;
    color: #fff;
    background-image: linear-gradient(to bottom,
            var(--fancy-button-gradient-0) 0%,
            var(--fancy-button-gradient-50) 50%,
            var(--fancy-button-gradient-100) 100%);
    box-shadow:
        0px 4px 12px rgba(9, 12, 60, 0.15),
        0px 2px 8px rgba(9, 12, 60, 0.15),
        0px 1px 3px var(--fancy-button-inner-shadow-top-lg),
        inset 0px 1px 1px var(--fancy-button-inner-shadow-top),
        inset 0px -1px 3px var(--fancy-button-inner-shadow-bottom);


    @media(max-width: 768px) {
        padding: 8px 28px 8px 28px;
    }

}

.btn:before,
.btn:after {
    content: "";
    position: absolute;
    border-radius: inherit;
    will-change: transform;
}

.btn:before {
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--fancy-button-shine-top);
    width: 96px;
    height: 6px;
    top: -3px;
    opacity: 0.6;
    filter: blur(6px);
    transition: opacity 0.25s;
}

.btn:after {
    inset: 0;
    background-size: cover;
    z-index: 2;
    opacity: 0.3;
    mix-blend-mode: overlay;
    pointer-events: none;
}

.btn span {
    display: block;
    padding: 12px 24px;
    border-radius: inherit;
    overflow: hidden;
    position: relative;
    background-image: linear-gradient(to bottom,
            var(--fancy-button-shine-top),
            transparent 8px);
    background-position: 0 -6px;
    background-repeat: no-repeat;
    z-index: 1;
}

.btn span:before,
.btn span:after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: var(--fancy-button-shine-bottom);
    transition:
        opacity 0.25s,
        transform 0.25s;
    will-change: transform;
}

.btn span:before {
    width: 92px;
    height: 8px;
    bottom: -4px;
    opacity: 0.75;
    filter: blur(6px);
}

.btn span:after {
    width: 112px;
    height: 1px;
    bottom: 0;
    opacity: 0.9;
    filter: blur(1px);
}

.btn:hover span:before {
    opacity: 0.8;
}

.btn:hover span:before {
    transform: translateX(-50%) scale(1.25);
}

.btn:hover span:after {
    opacity: 1;
}
</style>