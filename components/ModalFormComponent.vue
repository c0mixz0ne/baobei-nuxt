<script lang="ts" setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import { formatName, formatPhone } from '@/composables/formatInput'
import { validateName, validatePhone } from '@/composables/validateInput'
import { useModalStore } from '@/stores/modal'

onMounted(() => (document.body.style.overflow = 'hidden'))

onUnmounted(() => (document.body.style.overflow = ''))

const modalStore = useModalStore()

const route = useRoute()

const close = () => {
    if(route.path === '/program') {
        modalStore.setIsShow(false)
    }

    if (route.path === '/summercamp') {
        modalStore.setIsSummerCampShow(false)
    }
}

const name = ref('')
const phone = ref('')
const formSended = ref(false)
const source = computed(() => {
    if(route.path === '/program') {
        return 'Заявка со страницы программы'
    }

    if (route.path === '/summercamp') {
        const target = route.query.target ? route.query.target : 'Не раклама';        
        return `Заявка со страницы SummerCamp, статус ракламы - ${target}`
    }

    return 'Заявка с сайта'
})

const personalData = ref(false)
const personalDataError = ref(false)
const isFormSubmitted = ref(false)

// TODO: fix types
const errorName = ref<string | undefined>('')
const errorPhone = ref<string | undefined>('')

const submitForm = async () => {
    isFormSubmitted.value = true

    if (personalData.value == false) {
        personalDataError.value = true

        errorName.value = ''
        errorPhone.value = ''

        return
    } else {
        personalDataError.value = false
    }

    errorName.value = validateName(name)
    errorPhone.value = validatePhone(phone)

    if (!errorName.value && !errorPhone.value) {
        try {  
            const response = await useFetch('/api/lead', {
                method: 'POST',
                body: {
                    'name': name,
                    'phone': phone,
                    'source': source
                },
                watch: false
            })
            
            name.value = ''
            phone.value = ''  
            
            formSended.value = true

            if (route.path === '/summercamp') { 
                if ('ym' in window) {
                    const ym = (window as any).ym;
                    ym(import.meta.env.VITE_YMETRIKA,'reachGoal','yandex-btn');
                }
            }
        } catch(error) {
            console.error('Error send data:', error)
        }
    } else {
        console.warn('Input includes errors')
    }

    return true
}

const formatNameHandler = () => {
    name.value = formatName(name)
}

const formatPhoneHandler = () => {
    phone.value = formatPhone(phone)
}

watch(personalData, (newValue) => {
    if (isFormSubmitted.value) {
        personalDataError.value = !newValue
    }
})
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
                <div class="personal-data">
                    <label for="personal">
                        <input
                            id="personal"
                            class="check"
                            type="checkbox"
                            name="checkbox"
                            v-model="personalData"
                        />
                        <div class="checkbox-indicator"></div>
                        <span class="personal-text">Согласие на обработку персональных данных</span>
                        <span class="personal-error" v-if="isFormSubmitted && personalDataError">Необходимо согласие на обработку персональных данных</span>
                    </label>
                </div>
                <span v-if="formSended" class="form-submit">Спасибо, ваша заявка принята, наш адмиинистратор свяжется с Вами в ближайшее время</span>
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
    z-index: 10;

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
        z-index: 10;

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
            .form-submit {
                padding: 0 12px;
                margin-top: 20px;
                color: var(--success);
                display: block;
                text-align: center;
            }
            .personal-data {
                width: 100%;
                position: relative;

                label {
                    display: inline-flex;
                    align-items: center;
                    flex-wrap: wrap;
                    cursor: pointer;

                    .check {
                        opacity: 0;
                        z-index: -1;
                        position: absolute;

                        &:checked ~ .checkbox-indicator {
                            opacity: 1;

                            &::after {
                                display: block;
                            }
                        }
                    }

                    .checkbox-indicator {
                        min-width: 20px;
                        max-width: 20px;
                        min-height: 20px;
                        max-height: 20px;
                        border: 2px solid var(--black);
                        position: relative;
                        margin-right: 10px;
                        opacity: 0.5;
                        flex: 1;

                        &::after {
                            display: none;
                            border: solid var(--pink);
                            border-width: 0 2px 2px 0;
                            content: '';
                            height: 24px;
                            left: 4px;
                            position: absolute;
                            top: -9px;
                            transform: rotate(45deg);
                            width: 11px;
                        }
                    }

                    .personal-text {
                        color: var(--black);
                        flex: 1;
                    }

                    .personal-error {
                        margin-top: 5px;
                        color: var(--error);
                    }
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
