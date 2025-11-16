<script setup lang="ts">
import IMask from 'imask';
const route = useRoute()

import catalogSlug1 from '~/assets/img/catalog-slug-1.png'
import catalogSlug2 from '~/assets/img/catalog-slug-2.png'
import catalogSlug3 from '~/assets/img/catalog-slug-3.png'
import catalogSlug4 from '~/assets/img/catalog-slug-4.png'
import catalogSlug5 from '~/assets/img/catalog-slug-5.png'


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
    }

]

const slug = route.params.slug;
const { data } = await useCatalogItem(slug as string)
const { data: allItems } = await useCatalogItems();

const activeImage = ref<string | null>(null)

watch(
    data,
    (val) => {
        if (val?.images?.length) {
            activeImage.value = val.images[0]
        }
    },
    { immediate: true }
)

function setActiveImage(img: string) {
    activeImage.value = img
}


onMounted(async () => {
    await nextTick();

    const element = document.getElementById('check-up-phone-input');

    if (element) {
        const maskOptions = {
            mask: '+{7}(000)000-00-00',
        };
        IMask(element, maskOptions);
    } else {
        console.error('Элемент с ID "check-up-phone-input" не найден');
    }
});



const recommended = computed<CatalogItem[]>(() => {
    const all = allItems.value ?? [];
    if (!Array.isArray(all)) return [];

    // фильтруем undefined/null и исключаем текущий элемент
    const items = all.filter(
        (i): i is CatalogItem => Boolean(i) && i.slug !== slug
    );

    // перемешиваем (Fisher–Yates)
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }

    return items.slice(0, 3);
});


// SEO
const allowedCards = ['summary', 'summary_large_image', 'app', 'player'] as const
if (data.value?.seo) {
    useSeoMeta({
        title: data.value.seo.title,
        ogTitle: data.value.seo.og_title,
        description: data.value.seo.description,
        ogDescription: data.value.seo.og_description,
        ogImage: data.value.seo.og_image,
        twitterCard: allowedCards.includes(data.value.seo.twitter_card as any)
            ? (data.value.seo.twitter_card as typeof allowedCards[number])
            : 'summary',
    })
}

</script>

<template>
    <div class="pt-24 md:pt-10" v-if="data">
        <div class="container">
            <nuxt-link :to="$localePath('/catalog')"
                class="text-violet flex  mb-10 underline gap-x-1 md:text-lg w-fit items-center px-4 py-2.5 md:py-4 font-medium rounded-4xl cursor-pointer">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px"
                        fill="#6e3f88">
                        <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                    </svg>
                </span>
                <span> {{ $t('catalog') }} </span>
            </nuxt-link>
            <h4 class="block lg:hidden text-2xl text-center mb-6 font-bold"> {{ data.title }} </h4>
            <div class="flex flex-col-reverse lg:flex-row gap-y-6 gap-x-16 mb-16 md:mb-48">
                <div class="basis-1/2 2xl:basis-3/5">
                    <h4 class=" hidden lg:block text-4xl mb-6 font-bold">
                        {{ data.title }}
                    </h4>
                    <div class="flex flex-col gap-y-6">
                        {{ data.description }}
                        <div>
                            <p class="font-semibold text-2xl mb-4">
                                {{ $t('technical_details') }}
                            </p>
                            <div class="flex flex-col gap-y-4 text-sm md:text-base">
                                <div class="flex items-center border-b pb-4 border-[#6E3F88]"
                                    v-for="item in data.technical_specs">
                                    <p class="flex-1/2"> {{ item.title }} </p>
                                    <p class="flex-1/2"> {{ item.description }} </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div class="basis-1/2 2xl:basis-2/5">
                    <div class="relative mb-4 rounded-2xl overflow-hidden pb-[100%]">
                        <div class="absolute left-0 top-0 w-full h-full bg-white ">
                            <img class="w-full h-full  object-contain" :src="activeImage" alt="Catalog Slug Image">
                        </div>
                    </div>
                    <ul class="flex gap-4 flex-wrap ">
                        <li v-for="(img, i) in data.images" :key="i"
                            class="rounded-2xl overflow-hidden w-20 h-20 cursor-pointer transition-all duration-200"
                            @click="setActiveImage(img)">
                            <img class="w-full h-full object-cover" :src="img" alt="" />
                        </li>


                    </ul>
                </div>
            </div>
            <CatalogItemForm />
            <div>
                <h4 class="text-2xl md:text-4xl font-bold mb-6 md:mb-10"> {{ $t('recommended') }} </h4>
                <div
                    class="mb-10 md:mb-30 grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-2.5 md:gap-x-6 lg:gap-x-10 xl:gap-x-20 ">
                    <CatalogItem v-for="item in recommended" :key="item.id" :slug="item.slug" :image="item.image"
                        :title="item.title" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="css"></style>