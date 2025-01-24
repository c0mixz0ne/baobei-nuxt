<script setup lang="ts">
import { ref } from 'vue'
import ContainerComponent from '@/components/layout/ContainerComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

import { formatName, formatPhone } from '@/composables/formatInput'
import { validateName, validatePhone } from '@/composables/validateInput'

const name = ref('')
const phone = ref('')

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
            </form>
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
            justify-content: space-between;
            gap: 10px;
            .input-wrapper {
                width: 33.3%;
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
                }
            }
            button {
                margin: 0;
                width: 33.3%;
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
