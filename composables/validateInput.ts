import type { Ref } from 'vue'

export const validateName = (name: Ref<string>) => {
    if (name.value.length === 0) {
        return 'Имя не может быть пустым'
    }

    if (name.value.length < 2) {
        return 'Имя не может быть короче двух символов'
    }
}

export const validatePhone = (phone: Ref<string>) => {
    const cleaned: string = phone.value.replace(/\D/g, '')

    if (cleaned.length === 0) {
        return 'Телефон не может быть пустым'
    }

    if (cleaned.length < 11) {
        return 'Телефон должен содержать 11 цифр'
    }
}
