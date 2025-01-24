<script setup lang="ts">
import WelcomeComponent from '@/components/WelcomeComponent.vue'
import RecruitmentComponent from '@/components/RecruitmentComponent.vue'
import ServiceComponent from '@/components/ServiceComponent.vue'
import FreeLessonComponent from '@/components/FreeLessonComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import TeacherComponent from '@/components/TeacherComponent.vue'
import FormComponent from '@/components/FormComponent.vue'
import MapComponent from '@/components/MapComponent.vue'

useHead({
  title: 'Baobei : Главная',
})

</script>
<template>
    <WelcomeComponent>
        <h1>Центр иностранных языков и детского развития <span>Baobei</span></h1>
        <h2>
            Ребенок - это как растущее растение, которое нуждается в уходе, внимании и развитии,
            чтобы стать сильным и прекрасным
        </h2>
    </WelcomeComponent>
    <RecruitmentComponent />
    <ServiceComponent />
    <FreeLessonComponent />
    <AboutComponent />
    <TeacherComponent />
    <FormComponent />
    <MapComponent />
</template>
