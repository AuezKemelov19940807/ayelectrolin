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

const openWhatsApp = () => {
    const text = encodeURIComponent(`Имя: ${name.value}\nТелефон: ${phone.value}\nСообщение: ${message.value}`)
    window.open(`https://wa.me/7XXXXXXXXXX?text=${text}`, '_blank')
}
</script>

<template>
    <form @submit.prevent="submitForm" class="flex items-center justify-center mb-16 md:mb-48">
        <div class="max-w-[650px] w-full">
            <h4 class="text-2xl md:text-4xl font-bold text-center mb-10"> {{ $t('submit_pplication_catalog_form') }}
            </h4>
            <div class="flex flex-col gap-y-4 md:gap-y-6">
                <input v-model="phone" :class="[
                    'border rounded-2xl md:rounded-3xl p-2.5 md:p-4 w-full focus:outline-none md:text-lg',
                    phoneError ? 'border-red-600' : 'border-violet'
                ]" type="tel" id="check-up-phone-input" placeholder="+7 (___) ___ __ __" />

                <input v-model="name" :class="[
                    'border rounded-2xl md:rounded-3xl p-2.5 md:p-4 w-full focus:outline-none md:text-lg',
                    nameError ? 'border-red-600' : 'border-violet'
                ]" type="text" :placeholder="$t('your_name')" />

                <button type="submit" :disabled="loading"
                    class="bg-violet text-white flex items-center justify-center md:text-lg py-2.5 md:py-4 font-medium rounded-4xl cursor-pointer">
                    <span v-if="loading" class="animate-spin">
                        <img src="~/assets/img/loading.svg" alt="" />
                    </span>
                    <span v-else>{{ $t('submit') }}</span>
                </button>

                <span class="text-center text-lg md:text-2xl font-semibold">{{ $t('or') }}</span>

                <a href="https://api.whatsapp.com/send/?phone=77478544725&text&type=phone_number&app_absent=0"
                    target="_blank"
                    class="bg-violet text-white md:text-lg py-2.5 md:py-4 font-medium flex items-center justify-center rounded-4xl cursor-pointer">
                    {{ $t('whatsApp_text') }}
                </a>
            </div>
        </div>
    </form>
</template>

<style scoped lang="css">
/* оставляем дизайн без изменений */
</style>
