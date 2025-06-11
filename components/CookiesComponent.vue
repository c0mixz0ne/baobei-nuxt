<script setup lang="ts">

import { useModalStore } from '@/stores/modal'
import { ref, onMounted, onUnmounted, computed } from 'vue'

const modalStore = useModalStore()
const cookieWrapper = ref<HTMLElement | null>(null);
const resizeObserver = ref<ResizeObserver | null>(null);

const isCookieAccepted = computed(() => modalStore.getIsCookieAccepted)

const props = defineProps({
    metrika: {
        type: Function as PropType<() => void>,
        required: true
    }
})

const cookieHandler = () => {
    if (resizeObserver.value) {
        resizeObserver.value.disconnect()
    }

    modalStore.setCookieHeight(0)

    modalStore.setIsCookieAccepted(true)

    props.metrika?.();
}

const updateCookieHeight = () => {
    if (cookieWrapper.value) {
        const height = cookieWrapper.value.offsetHeight
        modalStore.setCookieHeight(height)
    }
};

onMounted(() => {
    if (!isCookieAccepted.value && cookieWrapper.value) {
        resizeObserver.value = new ResizeObserver(() => {
            updateCookieHeight()
        });

        resizeObserver.value.observe(cookieWrapper.value);
        updateCookieHeight()
    }
});

onUnmounted(() => {
    if (resizeObserver.value) {
        resizeObserver.value.disconnect()
    }
});
</script>
<template>
    <Transition name="fade">
        <div v-if="!isCookieAccepted" class="cookie-wrapper" ref="cookieWrapper">
            <div class="cookie">
                <slot>Мы используем файлы cookie для улучшения вашего опыта на нашем сайте.</slot>
                <button @click="cookieHandler">
                    Принять
                </button>
            </div>
        </div>
    </Transition>
</template>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.cookie-wrapper{
    position: sticky;
    bottom: -100%;
    z-index: 2;
    transition: var(--transition);
    bottom: 0;

    .cookie {
        font-size: var(--font-size);
        position: relative;
        background-color: var(--white);
        padding: 10px 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        left: 50%;
        transform: translateX(-50%);

        button {
            color: var(--white);
            background-color: var(--pink);
            border: none;
            font-size: 16px;
            padding: 5px 20px;
            border-radius: 20px;
            margin-top: 10px;
            cursor: pointer;
        }
    }

    @include breakpoint(sm) {
        .cookie {
            text-align: center;
        }
    }
}
</style>