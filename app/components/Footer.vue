<script setup lang="ts">


const { data } = await useContact()
const { data: footer } = await useFooter()
</script>

<template>

    <footer class="border-t border-violet pt-6 sm:pt-10 pb-6 sm:pb-10" v-if="footer && data">

        <div class="container">
            <div
                class="2xl:flex grid lg:grid-cols-2 gap-y-6 sm:gap-y-10 gap-x-5 items-center justify-center place-content-center 2xl:justify-between">
                <div
                    class="flex flex-col md:flex-row gap-y-4 gap-x-2 xs:gap-x-4 order-4 2xl:order-1 items-center justify-center ">
                    <p class="text-xs xs:text-sm text-black"> {{ footer.copy }} </p>
                    <a class="text-xs xs:text-sm text-black underline relative before:w-[1px] before:h-full before:rounded-full md:before:bg-black before:left-0 before:top-0 before:absolute pl-2 xs:pl-4  "
                        :href="footer.privacy_policy.link" target="_blank"> {{ footer.privacy_policy.text }} </a>
                    <a class="text-xs xs:text-sm text-black underline relative before:w-[1px] before:h-full before:rounded-full md:before:bg-black before:left-0 before:top-0 before:absolute pl-2 xs:pl-4"
                        :href="footer.cookie_policy.link" target="_blank"> {{ footer.cookie_policy.text }} </a>
                </div>
                <div class="flex items-center justify-center flex-col order-1  2xl:order-2">
                    <Logo />
                    <div class="flex sm:flex-row flex-col gap-y-4 pt-6 sm:pt-10 gap-x-6 text-base text-black">
                        <div class="flex flex-col gap-y-2">
                            <p>{{ data.ayelectrolin.name }}</p>
                            <a :href="`https://2gis.kz/almaty/geo/9430047375103632/${data.coordinates.lat}?m=${data.coordinates.lat}&utm_source=bigMap&utm_medium=widget-source&utm_campaign=firmsonmap`"
                                target="_blank">
                                {{ data.ayelectrolin.address }}
                            </a>
                        </div>
                        <div class="flex flex-col gap-y-2 items-center justify-center sm:justify-start sm:items-start">
                            <a :href="`tel:${data.ayelectrolin.number}`"> {{ data.ayelectrolin.number }} </a>
                            <a :href="`mailto:${data.ayelectrolin.email}`"> {{ data.ayelectrolin.email }} </a>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-center flex-col order-2 ">
                    <NuxtLink class="flex items-center gap-x-1 sm:gap-x-4" to="/">

                        <svg xmlns="http://www.w3.org/2000/svg" width="85" height="48" viewBox="0 0 85 48" fill="none">
                            <g clip-path="url(#clip0_325_184)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.78552 31.5609H32.7804V7.56494L27.9804 11.5147V29.9923L4.78552 31.5609Z"
                                    fill="url(#paint0_linear_325_184)" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M34.4196 31.5607H37.3879V10.8433L41.9415 14.5494V6.15115L34.4831 0L34.4196 31.5607Z"
                                    fill="url(#paint1_linear_325_184)" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M39.0322 31.5609V14.1089L46.5286 20.3263V29.8933L71.168 31.5609H39.0322Z"
                                    fill="url(#paint2_linear_325_184)" />
                                <path
                                    d="M8.91171 37.9998V37.3339H6.18443V36.2934H7.95087V35.6394H6.18443V34.7001H8.87588V34.0342H5.4325V37.9998H8.91171Z"
                                    fill="#0564AC" />
                                <path
                                    d="M13.5008 34.7655C13.5008 34.3136 13.292 34.0342 12.7668 34.0342H9.80676V37.9998H10.5587V36.448H11.257L12.8503 37.9998H13.829L12.2416 36.448H12.7429C13.2203 36.448 13.5008 36.24 13.5008 35.7108V34.7655ZM12.7489 35.5384C12.7489 35.7048 12.7011 35.7821 12.5102 35.7821H10.5587V34.7001H12.5102C12.719 34.7001 12.7489 34.7893 12.7489 34.9795V35.5384Z"
                                    fill="#0564AC" />
                                <path
                                    d="M17.9885 37.9998V37.3339H15.2613V36.2934H17.0278V35.6394H15.2613V34.7001H17.9528V34.0342H14.5094V37.9998H17.9885Z"
                                    fill="#0564AC" />
                                <path
                                    d="M25.562 36.5913L24.801 36.4589V37.3254H22.5179C22.4273 37.3254 22.4092 37.2953 22.4092 37.2171V34.7801C22.4092 34.7019 22.4454 34.6598 22.5239 34.6598H24.801V35.4842L25.562 35.3518V34.738C25.562 34.2507 25.2962 33.9858 24.813 33.9858H22.3971C21.8958 33.9858 21.6482 34.2386 21.6482 34.738V37.2592C21.6482 37.7225 21.9321 37.9993 22.3971 37.9993H24.813C25.272 37.9993 25.562 37.7406 25.562 37.2592V36.5913Z"
                                    fill="#0564AC" />
                                <path
                                    d="M30.6534 34.9431C30.6534 34.3594 30.5085 33.9863 29.9045 33.9863H27.2953C26.7457 33.9863 26.5585 34.3534 26.5585 34.9311V37.0491C26.5585 37.723 26.782 37.9998 27.2953 37.9998H29.9106C30.4481 37.9998 30.6534 37.6208 30.6534 37.0491V34.9431ZM29.7716 34.6603C29.8502 34.6603 29.8864 34.7024 29.8864 34.7806V37.2176C29.8864 37.2958 29.8683 37.3259 29.7777 37.3259H27.4282C27.3376 37.3259 27.3195 37.2958 27.3195 37.2176V34.7806C27.3195 34.7024 27.3618 34.6603 27.4403 34.6603H29.7716Z"
                                    fill="#0564AC" />
                                <path
                                    d="M35.8058 37.9998V33.9863H35.0931V36.9287L32.4477 33.9863H31.7592V37.9998H32.4719V35.0634L35.1233 37.9998H35.8058Z"
                                    fill="#0564AC" />
                                <path
                                    d="M40.6793 36.3451C40.6793 35.8878 40.4618 35.635 39.9545 35.635H37.7621C37.6715 35.635 37.6533 35.605 37.6533 35.5328V34.7746C37.6533 34.6843 37.6956 34.6603 37.7681 34.6603H39.8941V35.1236L40.6552 34.9852V34.7145C40.6552 34.2571 40.5041 33.9863 39.8941 33.9863H37.6292C37.14 33.9863 36.8923 34.1549 36.8923 34.7084V35.611C36.8923 36.0502 37.0916 36.315 37.6232 36.315H39.8035C39.8821 36.315 39.9183 36.3511 39.9183 36.4233V37.2176C39.9183 37.2898 39.8821 37.3259 39.8156 37.3259H37.5809V36.8505L36.8138 36.989V37.2958C36.8138 37.735 37.0373 37.9998 37.5386 37.9998H39.9364C40.5222 37.9998 40.6793 37.717 40.6793 37.2537V36.3451Z"
                                    fill="#0564AC" />
                                <path
                                    d="M45.3064 34.6603V33.9863H41.2235V34.6603H42.8845V37.9998H43.6455V34.6603H45.3064Z"
                                    fill="#0564AC" />
                                <path
                                    d="M49.6967 34.7265C49.6967 34.2691 49.4853 33.9863 48.9539 33.9863H45.9581V37.9998H46.7192V36.4293H47.4258L49.0384 37.9998H50.0289L48.4224 36.4293H48.9297C49.4129 36.4293 49.6967 36.2188 49.6967 35.6832V34.7265ZM48.9357 35.5087C48.9357 35.6772 48.8874 35.7554 48.6942 35.7554H46.7192V34.6603H48.6942C48.9056 34.6603 48.9357 34.7505 48.9357 34.9431V35.5087Z"
                                    fill="#0564AC" />
                                <path
                                    d="M54.6131 33.9858H53.8461V37.2171C53.8461 37.3073 53.828 37.3254 53.7374 37.3254H51.5691C51.4906 37.3254 51.4544 37.3073 51.4544 37.2171V33.9858H50.6934V37.2652C50.6934 37.7526 50.9893 37.9993 51.4423 37.9993H53.8703C54.3534 37.9993 54.6131 37.7105 54.6131 37.2532V33.9858Z"
                                    fill="#0564AC" />
                                <path
                                    d="M59.6139 36.5913L58.8529 36.4589V37.3254H56.5699C56.4793 37.3254 56.4612 37.2953 56.4612 37.2171V34.7801C56.4612 34.7019 56.4974 34.6598 56.5759 34.6598H58.8529V35.4842L59.6139 35.3518V34.738C59.6139 34.2507 59.3482 33.9858 58.865 33.9858H56.4491C55.9478 33.9858 55.7002 34.2386 55.7002 34.738V37.2592C55.7002 37.7225 55.984 37.9993 56.4491 37.9993H58.865C59.324 37.9993 59.6139 37.7406 59.6139 37.2592V36.5913Z"
                                    fill="#0564AC" />
                                <path d="M64.2289 34.6603V33.9863H60.146V34.6603H61.807V37.9998H62.568V34.6603H64.2289Z"
                                    fill="#0564AC" />
                                <path d="M65.6416 33.9858H64.8806V37.9993H65.6416V33.9858Z" fill="#0564AC" />
                                <path
                                    d="M70.8484 34.9431C70.8484 34.3594 70.7034 33.9863 70.0994 33.9863H67.4903C66.9407 33.9863 66.7534 34.3534 66.7534 34.9311V37.0491C66.7534 37.723 66.9769 37.9998 67.4903 37.9998H70.1055C70.643 37.9998 70.8484 37.6208 70.8484 37.0491V34.9431ZM69.9666 34.6603C70.0451 34.6603 70.0814 34.7024 70.0814 34.7806V37.2176C70.0814 37.2958 70.0632 37.3259 69.9727 37.3259H67.6231C67.5326 37.3259 67.5144 37.2958 67.5144 37.2176V34.7806C67.5144 34.7024 67.5567 34.6603 67.6352 34.6603H69.9666Z"
                                    fill="#0564AC" />
                                <path
                                    d="M76 37.9998V33.9863H75.2873V36.9287L72.6419 33.9863H71.9534V37.9998H72.6661V35.0634L75.3176 37.9998H76Z"
                                    fill="#0564AC" />
                                <path
                                    d="M4.28871 37.9998V37.2478H1.27633L4.28182 33.9937V33.4399H0.246998V34.192H2.94371L0 37.4324V37.9998H4.28871Z"
                                    fill="#0564AC" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_325_184" x1="36.2429" y1="30.2157" x2="35.7337"
                                    y2="2.33744" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0248A0" />
                                    <stop offset="1" stop-color="#0092D0" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_325_184" x1="36.2429" y1="30.2155" x2="35.7337"
                                    y2="2.33728" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0248A0" />
                                    <stop offset="1" stop-color="#0092D0" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_325_184" x1="36.2429" y1="30.2157" x2="35.7336"
                                    y2="2.33746" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0248A0" />
                                    <stop offset="1" stop-color="#0092D0" />
                                </linearGradient>
                                <clipPath id="clip0_325_184">
                                    <rect width="76" height="38" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <p class="text-base sm:text-2xl font-semibold"> {{ data.zere_construction.name }} </p>
                    </NuxtLink>
                    <div
                        class="flex sm:flex-row flex-col gap-y-4 sm:gap-y-0 pt-6 sm:pt-10 gap-x-6 text-base text-black">
                        <div class="flex flex-col gap-y-2 items-center justify-center sm:items-start sm:justify-start">
                            <p>{{ data.zere_construction.name }}</p>
                            <a :href="`https://2gis.kz/almaty/geo/9430047375103632/${data.coordinates.lat}?m=${data.coordinates.lat}&utm_source=bigMap&utm_medium=widget-source&utm_campaign=firmsonmap`"
                                target="_blank">
                                {{ data.zere_construction.address }}
                            </a>
                        </div>
                        <div class="flex flex-col gap-y-2 items-center justify-center sm:items-start sm:justify-start">
                            <a :href="`tel:${data.zere_construction.number}`">{{ data.zere_construction.number }}</a>
                            <a :href="`mailto:${data.zere_construction.email}`"> {{ data.zere_construction.email }} </a>
                        </div>
                    </div>
                </div>
                <ul class="flex gap-x-4 order-3 items-center justify-center">

                    <li v-for="item in data.socials" :key="item.id">
                        <a :href="item.link" target="_blank">
                            <img :src="item.icon" :alt="item.platform" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="css"></style>