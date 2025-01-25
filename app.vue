<script setup lang="ts">
import Header from '@/components/HeaderComponent.vue'
import Main from '@/components/MainComponent.vue'
import Footer from '@/components/FooterComponent.vue'

useHead({
  title: 'Baobei',
})

useSeoMeta({
  title: 'Школа иностранных языков Baobei',
  ogTitle: 'Школа иностранных языков Baobei',
  description: 'Школа иностранных языков в Новосибирске Baobei',
  ogDescription: 'Школа иностранных языков в Новосибирске Baobei',
  ogImage: '@/assets/images/background3.jpg',
})
</script>

<template>
	<Header />
	<Main />
	<Footer />
</template>
