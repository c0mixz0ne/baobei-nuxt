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
		<NuxtLink v-gsap.magnetic.weak class="button-link" to="/group">Записаться на занятия</NuxtLink>
	</WelcomeComponent>
	<!-- <RecruitmentComponent /> -->
	<TestingLevelComponent />
	<ServiceComponent />
	<FreeLessonComponent />
	<AboutComponent />
	<TeacherComponent />
	<FormComponent />
	<!-- <MapComponent /> -->
	<ModalInfoComponent>
		<p>
			Вступайте в нашу группу в
			<a href="https://max.ru/id543314713600_biz" style="white-space: nowrap; text-decoration: none; color: #000;">
				<svg style="border-radius: 5px; overflow: hidden; vertical-align: middle; transform: translateY(-1px);" width="20" height="20" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="url(#a)" d="M0 0h500v500H0z"/><path fill="url(#b)" d="M0 0h500v500H0z"/><path fill="#fff" fill-rule="evenodd" d="M253.223 398.85c-29.441 0-43.123-4.298-66.905-21.49-15.043 19.341-62.679 34.456-64.756 8.596 0-19.412-4.298-35.816-9.17-53.725C106.59 310.168 100 285.598 100 249.997 100 164.968 169.771 101 252.435 101c82.736 0 147.564 67.12 147.564 149.784.278 81.386-65.391 147.632-146.776 148.066m1.218-224.355c-40.258-2.077-71.633 25.788-78.582 69.484-5.73 36.175 4.442 80.229 13.109 82.522 4.155 1.002 14.613-7.45 21.132-13.969a74.5 74.5 0 0 0 36.39 12.966c41.713 2.006 77.356-29.75 80.157-71.418 1.63-41.756-30.487-77.123-72.206-79.513z" clip-rule="evenodd"/><defs><radialGradient id="b" cx="0" cy="0" r="1" gradientTransform="matrix(378.9086 473.90374 -195.26028 156.1199 -11.895 -219.593)" gradientUnits="userSpaceOnUse"><stop stop-color="#00F"/><stop offset="1" stop-opacity="0"/></radialGradient><linearGradient id="a" x1="58.923" x2="500" y1="380.268" y2="250" gradientUnits="userSpaceOnUse"><stop stop-color="#4CF"/><stop offset=".662" stop-color="#53E"/><stop offset="1" stop-color="#93D"/></linearGradient></defs></svg>
				Макс! 
			</a>
			Всегда актуальные новости, конкурсы и многое другое
		</p>
	</ModalInfoComponent>
</template>
