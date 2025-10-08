<template>
    <div ref="mapContainer" class="w-full h-[400px] rounded-lg"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { load } from '@2gis/mapgl'

const mapContainer = ref<HTMLElement | null>(null)
let map: any = null

onMounted(async () => {
    const mapglAPI = await load()
    map = new mapglAPI.Map(mapContainer.value!, {
        center: [76.934604, 43.226518],
        zoom: 15,
        key: 'a1893935-6834-4445-b97a-3405fb426c5b', // получи ключ на dev.2gis.com
    })
})

onBeforeUnmount(() => {
    map?.destroy()
})
</script>
