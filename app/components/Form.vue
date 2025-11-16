<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import IMask from 'imask'
import { useBitrixContact } from '~/composables/useBitrixContact'

const toast = useToast()
const { sendContact } = useBitrixContact()

const phone = ref('')
const name = ref('')
const message = ref('')
const phoneError = ref(false)
const nameError = ref(false)
const loading = ref(false)

const props = defineProps<{ title: string }>()
const { close } = useModal()

onMounted(() => {
    const element = document.getElementById('check-up-phone-input')
    if (element) IMask(element, { mask: '+{7}(000)000-00-00' })
})

// убираем ошибки при вводе
watch(phone, (val) => val.trim() && (phoneError.value = false))
watch(name, (val) => val.trim() && (nameError.value = false))

const submitForm = async () => {
    phoneError.value = !phone.value.trim()
    nameError.value = !name.value.trim()

    if (phoneError.value || nameError.value) return

    loading.value = true

    try {
        await sendContact({
            phone: phone.value,
            name: name.value,
            message: message.value,
        })

        toast.success({
            title: 'Успешно',
            message: 'Заявка успешно отправлена!',
        })

        phone.value = ''
        name.value = ''
        message.value = ''
        close()
    } catch {
        toast.error({
            title: 'Ошибка',
            message: 'Не удалось отправить заявку. Попробуйте позже.',
        })
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div class="w-full bg-white px-4 md:px-6 pt-12 pb-4 md:pb-10 rounded-3xl min-w-[300px] lg:max-w-[500px] relative">
        <button class="absolute top-4 right-2.5 md:right-4 cursor-pointer" @click="close" type="button">
            <img src="~/assets/img/close.svg" alt="Close Icon" />
        </button>

        <p class="text-xl md:text-2xl mb-4 md:mb-6 font-semibold text-center">
            {{ props.title }}
        </p>

        <form @submit.prevent="submitForm" class="flex flex-col gap-y-4 md:gap-y-6">
            <input v-model="phone" :class="[
                'border rounded-2xl md:rounded-3xl p-2.5 md:p-4 w-full focus:outline-none md:text-lg',
                phoneError ? 'border-red-600' : 'border-violet'
            ]" type="tel" id="check-up-phone-input" placeholder="+7 (___) ___ __ __" />

            <input v-model="name" :class="[
                'border rounded-2xl md:rounded-3xl p-2.5 md:p-4 w-full focus:outline-none md:text-lg',
                nameError ? 'border-red-600' : 'border-violet'
            ]" type="text" :placeholder="$t('your_name')" />

            <textarea v-model="message"
                class="border border-violet rounded-2xl md:rounded-3xl p-2.5 md:p-4 h-[150px] md:h-[200px] resize-none focus:outline-none md:text-lg"
                :placeholder="$t('your_application')"></textarea>

            <button type="submit" :disabled="loading"
                class="bg-violet text-white flex items-center justify-center md:text-lg py-2.5 md:py-4 font-medium rounded-4xl cursor-pointer">
                <span v-if="loading" class="animate-spin">
                    <img src="~/assets/img/loading.svg" alt="" />
                </span>
                <span v-else>{{ $t('submit') }}</span>
            </button>

            <p class="text-xs md:text-base opacity-70 mt-2">
                {{ $t('message') }}
            </p>
        </form>
    </div>
</template>
