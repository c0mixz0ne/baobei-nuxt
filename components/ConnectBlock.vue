<script setup lang="ts">
import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore()

const openModal = () => {
    modalStore.setIsShow(true)
}
</script>
<template>
    <section class="connect">
        <h4>По всем вопросам свяжитесь с нами любым удобным способом:</h4>
        <ul>
            <li>
                E-mail: <NuxtLink href="mailto:baobei.nsk@gmail.com"><b>baobei.nsk@gmail.com</b></NuxtLink>
            </li>
            <li>
                Телефон: <NuxtLink href="tel:+79139178616"><b>+ 7 913 917 86 16</b></NuxtLink>
            </li>
        </ul>
        <p>
            <button @click="openModal">Оставить заявку на обратный звонок</button>
        </p>
    </section>
</template>
<style lang="scss" scoped>
.connect {
    background-color: var(--white);
    padding: 120px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
        font-size: 20px;
        text-align: center;
    }
    ul {
        list-style-type: none;
        margin: 40px 0;
        padding: 0;
        li {
            font-weight: lighter;
            margin-bottom: 10px;
            &:last-child {
                margin-bottom: 0;
            }
            a {
                color: var(--black);
                text-decoration: none;
                font-size: 22px;
            }
        }
    }

    > p {
        button {
            color: var(--pink);
            text-decoration: underline;
            background-color: transparent;
            cursor: pointer;
            font-size: 20px;
            border: 0;
        }
    }

    @include breakpoint(sm) {
        padding: 70px 15px;
    }
}
</style>
