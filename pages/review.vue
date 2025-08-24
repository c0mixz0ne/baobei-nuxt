<script setup lang="ts">
import WelcomeComponent from '@/components/WelcomeComponent.vue'
import ReviewsComponent from '~/components/ReviewsComponent.vue';
useHead({
  title: 'Baobei : Отзывы',
})
</script>
<template>
    <WelcomeComponent class="review">
        <h1>Отзывы</h1>
    </WelcomeComponent>
    <ReviewsComponent />
</template>