import type { Ref } from 'vue'

export const formatName = (name: Ref<string>) => {
    return name.value
        .replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '')
        .split(' ')
        .map(
            (word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Первая буква заглавная
        )
        .join(' ')
}

export const formatPhone = (phone: Ref<string>) => {
    let cleaned = phone.value.replace(/\D/g, '')

    if (cleaned.length > 11) {
        cleaned = cleaned.slice(0, 11)
    }

    if (cleaned.length === 0) {
        return ``
    }

    if (cleaned.startsWith('8')) {
        if (cleaned.length <= 1) {
            return `8`
        } else if (cleaned.length <= 4) {
            return `8 (${cleaned.slice(1)}`
        } else if (cleaned.length <= 7) {
            return `8 (${cleaned.slice(1, 4)}) ${cleaned.slice(4)}`
        } else if (cleaned.length <= 9) {
            return `8 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`
        } else {
            return `8 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9, 11)}`
        }
    } else {
        if (cleaned.length <= 1) {
            return `+7`
        } else if (cleaned.length <= 4) {
            return `+7 (${cleaned.slice(1)}`
        } else if (cleaned.length <= 7) {
            return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4)}`
        } else if (cleaned.length <= 9) {
            return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`
        } else {
            return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9, 11)}`
        }
    }
}
