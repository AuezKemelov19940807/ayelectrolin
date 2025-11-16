<script setup lang="ts">
const { close, show } = useModal()
</script>

<template>

    <Teleport to="body">
        <Transition name="slide-fade">
            <div v-if="show" @mousedown.self="close"
                class="fixed w-full z-50 h-full left-0 top-0 before:absolute before:w-full before:h-full before:bg-black before:left-0 before:top-0 before:z-10 before:opacity-50">
                <div class=" absolute  top-1/2 z-50 left-1/2  -translate-x-1/2 -translate-y-1/2">
                    <Form :title="$t('order_callback')" />
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped lang="css">
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>
