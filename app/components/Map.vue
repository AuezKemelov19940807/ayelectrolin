<template>
    <div ref="mapContainer" class="max-w-full h-[400px] rounded-lg relative z-0" style="pointer-events: auto;"></div>
</template>

<script setup lang="ts">
import { ref, watchEffect, onBeforeUnmount } from 'vue'
import { load } from '@2gis/mapgl'

import { useContact } from '~/composables/useContact'

const { data, error, pending } = await useContact()

const mapContainer = ref<any>(null)
let map: any = null
let marker: any = null

/**
 * Инициализация карты с маркером
 */
const initMap = async (coordinates: { lat: number; lng: number }) => {
    const mapglAPI = await load()

    // уничтожаем старые экземпляры, если есть
    map?.destroy()
    marker?.destroy()

    // создаём карту
    map = new mapglAPI.Map(mapContainer.value, {
        center: [coordinates.lat, coordinates.lng],
        zoom: 17,
        key: '6b54ab77-a276-4705-813b-db6b32aaf5cd',
        zoomControl: false,
    })

    // создаём маркер
    marker = new mapglAPI.Marker(map, {
        coordinates: [coordinates.lat, coordinates.lng],
    })

    // клик по маркеру — открытие 2ГИС
    marker.on('click', () => {
        window.open(
            `https://2gis.kz/almaty/geo/9430047375103632/${coordinates.lat}?m=${coordinates.lat}&utm_source=bigMap&utm_medium=widget-source&utm_campaign=firmsonmap`,
            '_blank'
        )
    })

    // добавляем контрол зума
    new mapglAPI.ZoomControl(map, { position: 'topRight' })
}

// следим за данными и контейнером
watchEffect(() => {
    if (!mapContainer.value || !data.value?.coordinates) return
    initMap(data.value.coordinates)
})

// уничтожение карты и маркера при размонтировании
onBeforeUnmount(() => {
    marker?.destroy()
    map?.destroy()
})
</script>

<style scoped lang="css">
/* здесь можно добавить стили для карты, если нужно */
</style>
