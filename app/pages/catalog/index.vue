<script setup lang="ts">
const containerRef = ref(null)
const active = ref<number>(0)

// data fetching
const { data } = await useCatalog()
const { data: categoriesRaw } = await useCatalogCategories()
const { data: items } = await useCatalogItems()

// добавляем категорию "Все"
const categories = computed(() => {
    if (!categoriesRaw.value?.data) return { data: [] }
    return {
        data: [
            { id: 0, title: 'Все', slug: 'all' },
            ...categoriesRaw.value.data,
        ],
    }
})

// swiper
const swiper = useSwiper(containerRef, {
    slidesPerView: 6,
    breakpoints: {
        1280: { slidesPerView: 6 },
        1024: { slidesPerView: 5 },
        768: { slidesPerView: 4 },
        640: { slidesPerView: 3 },
        0: { slidesPerView: 2 },
    },
})

const changeActive = (index: number) => {
    active.value = index
}

const filteredItems = computed(() => {
    if (!categories.value?.data || !items.value) return []

    const activeCategory = categories.value.data[active.value]?.slug

    // если "Все" или не выбрано — показать все товары
    if (!activeCategory || activeCategory === 'all') {
        return items.value
    }

    // фильтруем по slug категории
    return items.value.filter(
        (item: CatalogItem) => item.category?.slug === activeCategory
    )
})

// SEO
const allowedCards = ['summary', 'summary_large_image', 'app', 'player'] as const
useSeoMeta({
    title: data.value?.seo.title,
    ogTitle: data.value?.seo.og_title,
    description: data.value?.seo.description,
    ogDescription: data.value?.seo.og_description,
    ogImage: data.value?.seo.og_image,
    twitterCard: allowedCards.includes(data.value?.seo.twitter_card as any)
        ? (data.value?.seo.twitter_card as typeof allowedCards[number])
        : 'summary',
})
</script>

<template>
    <div class="pt-24 md:pt-10">
        <div class="container">
            <UITitle class="mb-6" :title="data.title" />

            <div class="mb-6 max-w-[1200px]">
                <ClientOnly>
                    <swiper-container ref="containerRef">
                        <swiper-slide
                            class="item py-2 px-4 md:px-6 w-fit text-sm md:text-base inline-flex items-center justify-center bg-transparent rounded-full cursor-pointer transition-all duration-300 text-[#626466]"
                            :class="{ 'text-white bg-violet': active === index }"
                            v-for="(item, index) in categories?.data" :key="item.id" @click="changeActive(index)">
                            {{ item.title }}
                        </swiper-slide>
                    </swiper-container>
                </ClientOnly>
            </div>
            <div
                class="mb-10 md:mb-30 grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-2.5 md:gap-x-6 lg:gap-x-10 xl:gap-x-20 ">
                <CatalogItem v-for="item in filteredItems" :key="item.id" :slug="item.slug" :image="item.image"
                    :title="item.title" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="css">
swiper-slide {
    width: fit-content !important;
}
</style>