<script setup lang="ts">
import ContainerComponent from '@/components/layout/ContainerComponent.vue';

import { useModalStore } from '@/stores/modal';

const modalStore = useModalStore()

const isInfoModalShow = computed(() => modalStore.getIsInfoShow)
const isInfoClosed = computed(() => modalStore.getIsInfoClosed)

const closeModal = () => {
    modalStore.setIsInfoClosed(true)
}
</script>   
<template>
<div v-if="!isInfoClosed" :class="isInfoModalShow ? 'show' : ''" class="info-wrapper">
    <ContainerComponent>
        <div class="info">
            <slot></slot>
            <NuxtLink href="https://t.me/baobeinsk" target="_blank">
                Вступить
            </NuxtLink>
            <button @click="closeModal">
                <svg viewBox="0 0 50 50"> <path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z" ></path> </svg>
            </button>
        </div>
    </ContainerComponent>
</div>
</template>
<style lang="scss" scoped>
.info-wrapper{
    position: sticky;
    bottom: -100%;
    z-index: 2;
    transition: var(--transition);
    padding: 0 10px;

    &.show {
        bottom: 10px;
    }

    :deep(.container){
        padding: 0;
    }

    .info {
        font-size: var(--font-size);
        position: relative;
        background-color: var(--white);
        padding: 10px 30px;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50px;
        // box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        a {
            text-decoration: none;
            color: var(--white);
            background-color: var(--pink);
            padding: 5px 20px;
            border-radius: 20px;
            margin-top: 10px;
        }

        button {
            background-color: var(--white);
            border-radius: 50%;
            padding: 0;
            margin: 0;
            border: 0;
            right: 0;
            position: absolute;
            top: -20px;
            cursor: pointer;
            svg {
                width: 35px;
                height: 35px;
                fill: var(--pink);
                vertical-align: middle;
            }
        }
    }

    @include breakpoint(sm) {
        .info {
            text-align: center;
        }
    }
}
</style>