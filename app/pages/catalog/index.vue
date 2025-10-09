<script setup lang="ts">
import img1 from '~/assets/img/catalog-1.png'
import img2 from '~/assets/img/catalog-2.png'
import img3 from '~/assets/img/catalog-3.png'
import img4 from '~/assets/img/catalog-4.png'
import img5 from '~/assets/img/catalog-5.png'
import img6 from '~/assets/img/catalog-6.png'
import img7 from '~/assets/img/catalog-7.png'
import img8 from '~/assets/img/catalog-8.png'
import img9 from '~/assets/img/catalog-9.png'
import img10 from '~/assets/img/catalog-10.png'
import img11 from '~/assets/img/catalog-11.png'
import img12 from '~/assets/img/catalog-12.png'

const items = [
    { id: 1, name: 'Всё', category: 'all' },
    { id: 2, name: 'ГРЩ', category: 'grsch' },
    { id: 3, name: 'Квартирные щитки', category: 'shk' },
    { id: 4, name: 'Распределительные пункты', category: 'pr' },
    { id: 5, name: 'Щиты освещения', category: 'sho' },
    { id: 6, name: 'Автоматические шкафы', category: 'sha' }
]


const catalogItems = [
    {
        id: 1,
        image: img1,
        name: 'ГРЩ – главные распределительные щиты',
        slug: 'grsch-glavnye-raspredelitelnye-shchity',
        category: 'grsch'
    },
    {
        id: 2,
        image: img2,
        name: 'ГВРУ – вводно-распределительные устройства',
        slug: 'gbru-vvodno-raspredelitelnye-ustroistva',
        category: 'grsch'
    },
    {
        id: 3,
        image: img3,
        name: 'ЩК – щитки квартирные',
        slug: 'shk-shchitki-kvartirnye',
        category: 'shk'
    },
    {
        id: 4,
        image: img4,
        name: 'ЩО, ОЩВ, УОЩВ, ОП',
        slug: 'sho-oshv-uoshv-op',
        category: 'sho'
    },
    {
        id: 5,
        image: img5,
        name: 'ЩС, РЩС',
        slug: 'shs-rshs',
        category: 'sho'
    },
    {
        id: 6,
        image: img6,
        name: 'ЩО—70',
        slug: 'sho-70',
        category: 'sho'
    },
    {
        id: 7,
        image: img7,
        name: 'ПР – пункты распределительные',
        slug: 'pr-punkty-raspredelitelnye',
        category: 'pr'
    },
    {
        id: 8,
        image: img8,
        name: 'ЩСН – щиты собственных нужд',
        slug: 'shsn-shchity-sobstvennykh-nuzhd',
        category: 'sho'
    },
    {
        id: 9,
        image: img9,
        name: 'ША, ЩА – шкафы и щиты автоматики',
        slug: 'sha-sha-shkafy-i-shchity-avtomatiki',
        category: 'sha'
    },
    {
        id: 10,
        image: img10,
        name: 'АВР, ШАВР, ЩАВР – шкафы и щиты автоматического ввода резерва',
        slug: 'avr-shavr-shchavr-shkafy-i-shchity-avtomaticheskogo-vvoda-rezerva',
        category: 'sha'
    },
    {
        id: 11,
        image: img11,
        name: 'ГШУВ, ЩУВ – шкафы и щиты управления вентиляцией',
        slug: 'gshuv-shchuv-shkafy-i-shchity-upravleniya-ventilyatsiei',
        category: 'sha'
    },
    {
        id: 12,
        image: img12,
        name: 'ЩЭ – щиты этажные',
        slug: 'shche-shchity-etazhnye',
        category: 'shk'
    }

]

const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
    slidesPerView: 6,
    breakpoints: {
        1280: {
            slidesPerView: 6
        },
        1024: {
            slidesPerView: 5
        },
        768: {
            slidesPerView: 4
        },
        640: {
            slidesPerView: 3
        },
        0: {
            slidesPerView: 2
        }
    }
})


const active = ref<number>(1)

const changeActive = (id: number) => {
    active.value = id
}

const filteredItems = computed(() => {
    const activeCategory = items.find(i => i.id === active.value)?.category
    if (!activeCategory || activeCategory === 'all') return catalogItems
    return catalogItems.filter(i => i.category === activeCategory)
})

</script>

<template>
    <div class="pt-24 md:pt-10">
        <div class="container">
            <UITitle class="mb-6" title="Каталог продукции" />

            <div class="mb-6 max-w-[1200px]">
                <ClientOnly>
                    <swiper-container ref="containerRef">
                        <swiper-slide
                            class="item py-2 px-4 md:px-6 w-fit text-sm md:text-base inline-flex items-center justify-center bg-transparent rounded-full cursor-pointer transition-all duration-300 text-[#626466]"
                            :class="{ 'text-white bg-violet': active === item.id }" v-for="item in items" :key="item.id"
                            @click="changeActive(item.id)">
                            {{ item.name }}
                        </swiper-slide>
                    </swiper-container>
                </ClientOnly>
            </div>
            <div
                class="mb-10 md:mb-30 grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-2.5 md:gap-x-6 lg:gap-x-10 xl:gap-x-20 ">
                <CatalogItem v-for="item in filteredItems" :key="item.id" :slug="item.slug" :image="item.image"
                    :name="item.name" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="css">
swiper-slide {
    width: fit-content !important;
}
</style>