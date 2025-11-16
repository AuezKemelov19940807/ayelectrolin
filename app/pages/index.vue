<script setup lang="ts">
const { data, error, pending } = await useMain()


const allowedCards = ['summary', 'summary_large_image', 'app', 'player'] as const

useSeoMeta({
    title: data.value?.seo.title,
    ogTitle: data.value?.seo.og_title,
    description: data.value?.seo.description,
    ogDescription: data.value?.seo.og_description,
    ogImage: data.value?.seo.og_image,
    twitterCard: allowedCards.includes(data.value?.seo.twitter_card as any)
        ? (data.value?.seo.twitter_card as typeof allowedCards[number])
        : 'summary', // значение по умолчанию
})



</script>

<template>
    <div v-if="data">
        <div class="bg mb-18 md:pt-24 lg:mb-28">
            <Banner class="pb-18 lg:pb-24 2xl:pb-34" :banner="data.banner" />
            <Equipment :equipment="data.equipment" />
        </div>
        <Priority class="mb-18 md:pt-24 lg:mb-28" :priority="data.priority" />
        <Guarantee class="mb-18 md:mb-40" :guarantee="data.guarantee" />
        <Brands class="mb-18 md:mb-48" :brand="data.brand" />
        <Feedback class="mb-18 md:mb-48" :review="data.review" />
        <Zere class="mb-18 md:mb-48" :company="data.company" />
        <Projects class="mb-18 md:mb-48" :project="data.project" />
        <ContactForm class="mb-18 md:mb-30" :consultation="data.consultation" />
    </div>
    <div v-else> {{ error }} </div>
</template>
<style scoped lang="css">
.bg {
    position: relative;
}

.bg::before {
    content: '';
    position: absolute;
    background: url('../assets/img/vector.png') no-repeat;
    width: 2755.9433212685367px;
    height: 2113.6398633527997px;
    top: -260px;

    @media(max-width: 1024px) {
        top: -700px;
    }

    @media(max-width: 768px) {
        top: -800px;
    }
}
</style>
