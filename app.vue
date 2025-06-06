<script setup lang="ts">
import Header from '@/components/HeaderComponent.vue'
import Main from '@/components/MainComponent.vue'
import Footer from '@/components/FooterComponent.vue'
import CookiesComponent from './components/CookiesComponent.vue'

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
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Центр иностранных языков и детского развития Baobei",
        "description": "Центр иностранных языков и детского развития Baobei в Новосибирске предлагает курсы английского, китайского и других языков для детей и взрослых.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ул. Семьи Шамшиных, 18/1",
          "addressLocality": "Новосибирск",
          "postalCode": "630099",
          "addressCountry": "RU"
        },
        "telephone": "+7 (913) 917-86-16",
        "email": "baobei.nsk@gmail.com",
        "url": "https://baobei-online.ru",
      })
    }
  ]
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
  <CookiesComponent />
</template>
