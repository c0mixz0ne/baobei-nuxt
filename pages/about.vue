<script setup lang="ts">
import WelcomeComponent from '@/components/WelcomeComponent.vue'
import GeneralInformationComponent from '@/components/GeneralInformationComponent.vue'

useHead({
	title: 'Baobei : О Нас',
})
</script>
<template>
	<WelcomeComponent class="about">
		<h1>Сведения об образовательной организации</h1>
	</WelcomeComponent>
	<GeneralInformationComponent />
</template>
