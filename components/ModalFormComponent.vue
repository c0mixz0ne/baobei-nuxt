<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import { formatName, formatPhone } from '@/helpers/formatInput'
import { validateName, validatePhone } from '@/helpers/validateInput'
import { useModalStore } from '@/stores/modal'

onMounted(() => (document.body.style.overflow = 'hidden'))

onUnmounted(() => (document.body.style.overflow = ''))

const modalStore = useModalStore()

const close = () => {
    modalStore.setIsShow(false)
}

const name = ref('')
const phone = ref('')

// TODO: fix types
const errorName = ref<string | undefined>('')
const errorPhone = ref<string | undefined>('')

const submitForm = () => {
    errorName.value = validateName(name)
    errorPhone.value = validatePhone(phone)

    if (errorName.value || errorPhone.value) {
        return
    }

    alert('submit')
    name.value = ''
    phone.value = ''
}

const formatNameHandler = () => {
    name.value = formatName(name)
}

const formatPhoneHandler = () => {
    phone.value = formatPhone(phone)
}
</script>
<template>
    <div class="modal-wrapper" @click="close">
        <div class="modal" @click.stop>
            <button class="modal-close" @click="close">
                <svg viewBox="0 0 50 50">
                    <path
                        d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"
                    ></path>
                </svg>
            </button>
            <span class="modal-title">Форма для связи</span>
            <form @submit.prevent="submitForm()">
                <div class="input-wrapper">
                    <input
                        v-model="name"
                        name="name"
                        placeholder="Ваше имя"
                        type="text"
                        @input="formatNameHandler"
                    />
                    <label v-if="errorName" for="name">{{ errorName }}</label>
                </div>
                <div class="input-wrapper">
                    <input
                        v-model="phone"
                        name="phone"
                        placeholder="+7 (999) 999-99-99"
                        type="tel"
                        @input="formatPhoneHandler"
                    />
                    <label v-if="errorPhone" for="phone">{{ errorPhone }}</label>
                </div>
                <ButtonComponent type="submit"> Отправить </ButtonComponent>
            </form>
        </div>
    </div>
</template>
<style lang="scss">
.modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--black-opacity);
    padding: 20px;

    .modal {
        position: relative;
        background-color: var(--white);
        width: 100%;
        max-width: 500px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        color: var(--black);
        border-radius: 5px;

        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            .input-wrapper {
                width: 100%;

                label {
                    display: block;
                    margin-top: 5px;
                    color: var(--error);
                }

                input {
                    color: var(--black);
                    background-color: var(--white);
                    border-radius: 0;
                    border: 0;
                    padding: 0 20px;
                    line-height: 60px;
                    font-size: 16px;
                    width: 100%;
                    border: 1px solid var(--pink);
                }
            }
        }

        .modal-title {
            display: block;
            font-size: 20px;
            text-align: center;
            margin-bottom: 20px;
        }

        .modal-close {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: transparent;
            border: 0;
            cursor: pointer;
            padding: 0;
            margin: 0;

            svg {
                width: 35px;
                height: 35px;
                fill: var(--pink);
            }
        }
    }
}
</style>
