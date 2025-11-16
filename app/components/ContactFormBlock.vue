<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import IMask from 'imask'
import { useBitrixContact } from '~/composables/useBitrixContact'

const { sendContact } = useBitrixContact()
const toast = useToast()

const phone = ref('')
const name = ref('')
const message = ref('')
const phoneError = ref(false)
const nameError = ref(false)
const loading = ref(false)

const props = defineProps<{
    name_placeholder: string
    message_placeholder: string
    btn_text: string
    note_text: string
}>()

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
    <form @submit.prevent="submitForm" class="flex flex-col gap-y-4 md:gap-y-6">
        <!-- Phone -->
        <input v-model="phone" type="tel" id="check-up-phone-input" placeholder="+7 (___) ___ __ __" :class="[
            'border rounded-2xl md:rounded-3xl p-2.5 md:p-4 w-full focus:outline-none md:text-lg transition-colors',
            phoneError ? 'border-red-600' : 'border-violet'
        ]" />

        <!-- Name -->
        <input v-model="name" type="text" :placeholder="name_placeholder" :class="[
            'border rounded-2xl md:rounded-3xl p-2.5 md:p-4 w-full focus:outline-none md:text-lg transition-colors',
            nameError ? 'border-red-600' : 'border-violet'
        ]" />

        <!-- Message (optional) -->
        <textarea v-model="message" :placeholder="message_placeholder"
            class="border border-violet rounded-2xl md:rounded-3xl p-2.5 md:p-4 h-[150px] md:h-[200px] resize-none focus:outline-none md:text-lg transition-colors"></textarea>

        <!-- Submit -->
        <button type="submit" :disabled="loading"
            class="bg-violet text-white flex items-center justify-center md:text-lg py-2.5 md:py-4 font-medium rounded-4xl cursor-pointer hover:opacity-90 transition">
            <span v-if="loading" class="animate-spin">
                <img src="~/assets/img/loading.svg" alt="loading" />
            </span>
            <span v-else>{{ btn_text }}</span>
        </button>

        <!-- Note -->
        <p class="text-xs md:text-base opacity-70 mt-2 text-center md:text-left">
            {{ note_text }}
        </p>
    </form>
</template>
