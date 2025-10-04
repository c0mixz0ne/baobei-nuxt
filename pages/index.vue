<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

import WelcomeComponent from '@/components/WelcomeComponent.vue'
import RecruitmentComponent from '@/components/RecruitmentComponent.vue'
import ServiceComponent from '@/components/ServiceComponent.vue'
import FreeLessonComponent from '@/components/FreeLessonComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import TeacherComponent from '@/components/TeacherComponent.vue'
import FormComponent from '@/components/FormComponent.vue'
import MapComponent from '@/components/MapComponent.vue'
import ModalInfoComponent from '@/components/ModalInfoComponent.vue'

import smoothScroll from '@/composables/smoothScroll'

const route = useRoute()

onMounted(()=> {
	if (route.hash === '#contacts') {
		smoothScroll('#contacts');
	}
})

useHead({
	title: 'Центр иностранных языков и детского развития Baobei',
})

</script>
<template>
	<WelcomeComponent>
		<h1>Центр иностранных языков и детского развития <span>Baobei</span></h1>
		<h2>
			Ребёнок - это как растущее растение, которое нуждается в уходе, внимании и развитии,
			чтобы стать сильным и прекрасным
		</h2>
	</WelcomeComponent>
	<TestingLevelComponent />
	<RecruitmentComponent />
	<ServiceComponent />
	<FreeLessonComponent />
	<AboutComponent />
	<!-- <TeacherComponent /> -->
	<FormComponent />
	<!-- <MapComponent /> -->
	<ModalInfoComponent>
		Вступай в нашу группу в Телеграм! Всегда актуальные новости, конкурсы и многое другое
	</ModalInfoComponent>
</template>
