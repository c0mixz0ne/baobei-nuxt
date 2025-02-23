<script setup lang="ts">
import Header from '@/components/HeaderComponent.vue'
import Main from '@/components/MainComponent.vue'
import Footer from '@/components/FooterComponent.vue'

import ogImage from '@/assets/images/ogImage.jpg'

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
  title: 'Центр иностранных языков и детского развития Baobei в Новосибирске | Изучение английского, китайского и других языков',
  ogTitle: 'Центр иностранных языков и детского развития Baobei в Новосибирске | Изучение английского, китайского и других языков',
  description: 'Центр иностранных языков и детского развития Baobei в Новосибирске предлагает курсы английского, китайского и других языков для детей и взрослых. Эффективные методики, квалифицированные преподаватели и удобное расписание.',
  ogDescription: 'Изучайте иностранные языки с Baobei! Курсы английского, китайского и других языков для всех возрастов в Новосибирске. Запишитесь на пробное занятие!',
  ogImage: ogImage,
  ogImageAlt: 'Центр иностранных языков и детского развития Baobei в Новосибирске',
  ogUrl: 'https://baobei-online.ru',
  ogType: 'website',
  ogSiteName: 'Центр иностранных языков и детского развития Baobei в Новосибирске',
})
</script>

<template>
	<Header />
	<Main />
	<Footer />
</template>
