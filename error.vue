<script setup lang="ts">
import type { NuxtError } from '#app'
import ContainerComponent from './components/layout/ContainerComponent.vue';
import ButtonComponent from './components/ButtonComponent.vue';

const props = defineProps({
	error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })

useHead({
	title: `Упс... ${props.error?.statusCode}`,
})
</script>
<template>
	<section class="error">
		<ContainerComponent>
			<img class="error-image" src="@/assets/images/error.png" alt="Ошибка">
			<h1>Упс... У нас произошла ошибочка {{ error?.statusCode }}. Мы уже знаем, и делаем всё возможное </h1>

			<ButtonComponent @click="handleError">Перейти на главную</ButtonComponent>
		</ContainerComponent>
	</section>
</template>
<style lang="scss" scoped>
.error {
	padding: 20px;
	height: 100svh;
	min-height: 320px;
	display: flex;
	align-items: center;
	justify-content: center;	

	.error-image{
		display: block;
		margin: 0 auto;
		max-width: 100%;
	}

	h1 {
		margin-bottom: 30px;
		text-align: center;
	}
}
</style>
