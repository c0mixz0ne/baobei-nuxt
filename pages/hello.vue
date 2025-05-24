<script setup lang="ts">
// import PersonalDataComponent from '@/components/PersonalDataComponent.vue'
import ModalFormComponent from '@/components/ModalFormComponent.vue'

import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore()

const isSummerCampShow = computed(() => modalStore.getIsSummerCampShow)

useHead({
	title: 'Summer Camp',
})
</script>
<template>
	<PersonalDataComponent />
	<ModalFormComponent v-if="isSummerCampShow" />
</template>
