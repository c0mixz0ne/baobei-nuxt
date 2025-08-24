<script lang="ts" setup>
import ContainerComponent from '@/components/layout/ContainerComponent.vue'

</script>
<template>
    <section class="reviews">
        <ContainerComponent>
            <div class="widgets-wrapper">
                <!-- smartwidgets.ru -->
                <iframe id="widgets" src="https://swdgts.ru/c8146474c87bb147d03c0fd5cf16e3cf" width="100%" height="700"
                    frameborder="0"></iframe>
            </div>
        </ContainerComponent>
    </section>
</template>
<style lang="scss" scoped>
.widgets-wrapper{
    padding-top: 40px;
}
</style>
