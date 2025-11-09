<script setup lang="ts">
import ContainerComponent from '../layout/ContainerComponent.vue';
import ButtonComponent from '../ButtonComponent.vue';

const modalStore = useModalStore()

const openModal = () => {
    modalStore.setIsCalligraphyShow(true)
}
</script>
<template>
    <section class="calligraphy">
        <ContainerComponent>
            init
        </ContainerComponent>
    </section>
</template>
<style lang="scss" scoped>
.calligraphy {
    min-height: 100svh;
    padding-top: 90px;
    padding-bottom: 20px;
    background-color: var(--summecamp-bg);
    position: relative;
}
</style>
