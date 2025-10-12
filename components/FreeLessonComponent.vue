<script setup lang="ts">
import MainSliderComponent from '@/components/MainSliderComponent.vue'
</script>
<template>
    <section class="carousel" v-gsap.whenVisible.from='{ autoAlpha: 0, y: -50 }'>
        <MainSliderComponent />
    </section>
</template>
<style scoped>
.carousel {
    margin-top: 50px;
}
</style>
