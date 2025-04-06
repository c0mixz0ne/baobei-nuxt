<script setup lang="ts">
import SummerCampComponent from '@/components/summer-camp/SummerCampComponent.vue'
import ModalFormComponent from '@/components/ModalFormComponent.vue'

import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore()

const isSummerCampShow = computed(() => modalStore.getIsSummerCampShow)

useHead({
  title: 'Summer Camp',
})
</script>
<template>
    <SummerCampComponent />
    <ModalFormComponent v-if="isSummerCampShow" />
</template>
<style lang="scss" scoped></style>
