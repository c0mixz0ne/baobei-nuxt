<script setup lang="ts">
import Header from '@/components/HeaderComponent.vue'
import Main from '@/components/MainComponent.vue'
import Footer from '@/components/FooterComponent.vue'

import ogImage from '@/assets/images/background3.jpg'

const route = useRoute()

useHead(() => ({
  title: 'Baobei',
  htmlAttrs: {
    lang: "ru",
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://baobei-online' + route.path,
    },
  ],
}))

useSeoMeta({
  title: 'Школа иностранных языков Baobei',
  ogTitle: 'Школа иностранных языков Baobei',
  description: 'Школа иностранных языков в Новосибирске Baobei',
  ogDescription: 'Школа иностранных языков в Новосибирске Baobei',
  ogImage: ogImage,
})
</script>

<template>
	<Header />
	<Main />
	<Footer />
</template>
