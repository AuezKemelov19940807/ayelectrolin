<script setup lang="ts">

</script>

<template>
    <NuxtLink :to="$localePath('/')">
        <span class="flex md:hidden items-center gap-x-2.5   ">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px"
                height="30px" viewBox="0 0 30 30" version="1.1">
                <g id="surface1">
                    <path
                        style=" stroke:none;fill-rule:evenodd;fill:rgb(43.137255%,24.705882%,53.333336%);fill-opacity:1;"
                        d="M 20.949219 28.773438 C 19.125 29.5625 17.113281 30 14.996094 30 C 11.160156 30 7.65625 28.554688 5 26.179688 L 10.871094 15.816406 L 15.34375 14.011719 L 14.734375 16.082031 L 20.851562 13.675781 Z M 20.949219 28.773438 " />
                    <path
                        style=" stroke:none;fill-rule:evenodd;fill:rgb(43.137255%,24.705882%,53.333336%);fill-opacity:1;"
                        d="M 17.71875 0.246094 C 18.832031 0.453125 19.90625 0.78125 20.921875 1.21875 L 20.851562 12.4375 L 16.992188 13.851562 L 17.4375 12.171875 L 11.550781 14.183594 Z M 17.71875 0.246094 " />
                    <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;"
                        d="M 21.628906 1.546875 C 26.585938 3.996094 30 9.101562 30 15.003906 C 30 20.757812 26.75 25.761719 21.984375 28.277344 Z M 21.628906 1.546875 " />
                    <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;"
                        d="M 4.230469 25.4375 C 1.609375 22.738281 0 19.054688 0 15 C 0 6.722656 6.71875 0 15 0 C 15.550781 0 16.09375 0.03125 16.628906 0.0859375 Z M 4.230469 25.4375 " />
                </g>
            </svg>
            <span class="font-semibold text-sm"> {{ $t('logo') }} </span>
        </span>

        <span class="hidden md:flex items-center gap-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <g clip-path="url(#clip0_4_9)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M33.5186 46.0358C30.5984 47.3008 27.3783 48.0022 23.9957 48.0022C17.8543 48.0022 12.2482 45.6903 8.00171 41.8902L17.3921 25.3052L24.5522 22.4204L23.5722 25.7298L33.3652 21.8809L33.5186 46.0358Z"
                        fill="#6E3F88" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M28.3489 0.396021C30.1337 0.723433 31.8498 1.24859 33.4736 1.94805L33.3646 19.9L27.19 22.165L27.8983 19.4726L18.4822 22.6947L28.3489 0.396021Z"
                        fill="#6E3F88" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M34.6062 2.4724C42.5375 6.39114 47.9975 14.5646 47.9975 24.0032C47.9975 33.2131 42.7985 41.2184 35.178 45.242L34.6062 2.4724Z"
                        fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6.76668 40.6995C2.57784 36.3782 -0.00219727 30.4882 -0.00219727 24.0004C-0.00219727 10.7543 10.7521 0 23.9982 0C24.8801 0 25.7511 0.0474444 26.6084 0.140385L6.76668 40.6995Z"
                        fill="black" />
                </g>
                <defs>
                    <clipPath id="clip0_4_9">
                        <rect width="48" height="48" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <span class="font-semibold text-2xl"> {{ $t('logo') }} </span>
        </span>

    </NuxtLink>
</template>

<style scoped lang="css"></style>