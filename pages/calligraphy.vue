<script setup lang="ts">
import CalligraphyComponent from '@/components/calligraphy/CalligraphyComponent.vue'
import ModalFormComponent from '@/components/ModalFormComponent.vue'

import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore()

const isCalligraphyShow = computed(() => modalStore.getIsCalligraphyShow)

useHead({
	title: 'Baobei : Каллиграфия',
})
</script>
<template>
	<CalligraphyComponent />
	<ModalFormComponent v-if="isCalligraphyShow" />
</template>
