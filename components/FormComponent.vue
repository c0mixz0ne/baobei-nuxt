<script setup lang="ts">
import { ref, watch } from 'vue'
import ContainerComponent from '@/components/layout/ContainerComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

import { formatName, formatPhone } from '@/composables/formatInput'
import { validateName, validatePhone } from '@/composables/validateInput'

const name = ref('')
const phone = ref('')

const errorName = ref<string | undefined>('')
const errorPhone = ref<string | undefined>('')
const isSubmitting = ref(false)
const formSended = ref(false)

const personalData = ref(false)
const personalDataError = ref(false)
const isFormSubmitted = ref(false)


const formatNameHandler = () => {
    name.value = formatName(name)
}

const formatPhoneHandler = () => {
    phone.value = formatPhone(phone)
}

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
                    'source': 'Заявка с формы на главной'
                },
                watch: false
            })

            name.value = ''
            phone.value = ''

            formSended.value = true
        } catch(error) {
            console.error('Error send data:', error)
        }
    } else {
        console.warn('Input includes errors')
    }

    return true
}

watch(personalData, (newValue) => {
    if (isFormSubmitted.value) {
        personalDataError.value = !newValue
    }
})
</script>
<template>
    <section id="form" class="form">
        <ContainerComponent>
            <h2>Запишитесь на пробное занятие и мастер-классы!</h2>
            <h3>Оставьте свои контактные данные, и наш администратор свяжется с вами</h3>
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
                <ButtonComponent type="submit"> Заказать звонок </ButtonComponent>
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
                        <span class="personal-text">Я даю согласие на обработку моих персональных данных в соответствии с <NuxtLink target="_blank" to="/personal">Политикой обработки персональных данных</NuxtLink>.</span>
                        <span class="personal-error" v-if="isFormSubmitted && personalDataError">Необходимо согласие на обработку персональных данных</span>
                    </label>
                </div>

            </form>
            <span v-if="formSended" class="form-submit">Спасибо, ваша заявка принята, наш адмиинистратор свяжется с Вами в ближайшее время</span>
        </ContainerComponent>
    </section>
</template>
<style lang="scss" scoped>
.form {
    background-image: linear-gradient(rgba(44, 55, 69, 0.8), rgba(44, 55, 69, 0.6)),
        url(@/assets/images/background3.jpg);
    background-size: cover;
    background-position: center center;
    padding: 70px 0;
    .form-submit {
        padding: 0 12px;
        margin-top: 20px;
        color: var(--success);
        display: block;
        text-align: center;
    }
    .container {
        h2 {
            font-size: 42px;
            color: var(--white);
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
            margin-bottom: 40px;
        }
        h3 {
            max-width: 600px;
            margin: 0 auto;
            font-weight: lighter;
            color: var(--white);
            text-align: center;
        }
        form {
            max-width: 800px;
            margin: 0 auto;
            margin-top: 40px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 10px;
            .input-wrapper {
                flex: 1;
                position: relative;
                label {
                    display: block;
                    margin-top: 5px;
                    color: var(--error);
                    position: absolute;
                    left: 0;
                    bottom: -20px;
                    transform: translateY(50%);
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
                    border-radius: 30px;
                }
            }
            .personal-data {
                width: 100%;
                margin-top: 30px;
                position: relative;

                label {
                    display: inline-flex;
                    align-items: center;
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
                        border: 2px solid var(--white);
                        position: relative;
                        margin-right: 10px;
                        opacity: 0.5;

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
                        color: var(--white);

                        &>a {
                            color: var(--white);
                        }
                    }

                    .personal-error {
                        display: block;
                        margin-top: 5px;
                        color: var(--error);
                        position: absolute;
                        left: 0;
                        bottom: -20px;
                        transform: translateY(50%);
                    }
                }
            }
            button {
                margin: 0;
                flex: 1;
                font-size: var(--font-size);
            }
        }
    }
}

@include breakpoint(md) {
    .form {
        .container {
            form {
                flex-direction: column;
                gap: 30px;
                .input-wrapper {
                    width: 100%;
                    max-width: 500px;
                    margin: 0 auto;
                    label {
                        transform: unset;
                    }
                }
                button {
                    margin: 0 auto;
                    width: 100%;
                    max-width: 500px;
                }

                .personal-data {
                    margin: 0 auto;
                    max-width: 500px;
                    // margin-bottom: 35px;
                    label {
                        flex-wrap: wrap;
                        .checkbox-indicator{
                            flex: 1;
                        }
                        .personal-text{
                            flex: 1;
                        }
                        .personal-error{
                            position: relative;
                            transform: unset;
                            bottom: unset;
                            left: unset;
                        }
                    }
                }
            }
        }
    }
}

@include breakpoint(xs) {
    .form {
        padding: 20px 0;
        .container {
            h2 {
                font-size: 32px;
            }
        }
    }
}
</style>
