<script setup lang="ts">
import { computed } from 'vue'
import ProgramContainerComponent from '@/components/layout/ProgramContainerComponent.vue'
import WelcomeComponent from '@/components/WelcomeComponent.vue'
import AboutProgramComponent from '@/components/AboutProgramComponent.vue'
import ProgramComponent from '@/components/ProgramComponent.vue'
import ConnectBlock from '@/components/ConnectBlock.vue'
import ModalFormComponent from '@/components/ModalFormComponent.vue'

import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore()

const isModalShow = computed(() => modalStore.getIsShow)

useHead({
  title: 'Baobei : Программы',
})
</script>
<template>
    <WelcomeComponent class="program">
        <h1>Образовательные программы</h1>
    </WelcomeComponent>
    <AboutProgramComponent />
    <ProgramContainerComponent>
        <ProgramComponent class="rtl">
            <div class="content">
                <h3 class="h3">Английский язык</h3>
                <ul>
                    <li>Одно занятие: от 45 минут</li>
                    <li>
                        Режим занятий: 2 урока в неделю (на индивидуальном плане возможен 1 урок)
                    </li>
                    <li>Размер групп: 3-8 человек, что позволяет продуктивно проводить занятия</li>
                    <li>Преподаватели со стажем работы и высокой языковой квалификацией</li>
                    <li>Эффективная методика обучения</li>
                    <li>Возможны индивидуальные занятия</li>
                    <li>Взрослые и детские группы</li>
                    <li>Зачисление на уровни проводится по результатам бесплатного тестирования</li>
                    <li>Абонемент от <b>6000</b> за 8 занятий</li>
                </ul>
            </div>
            <div class="image">
                <img loading='lazy' src="@/assets/images/eng.jpg" alt="Английский язык" />
            </div>
        </ProgramComponent>
        <ProgramComponent class="ltr">
            <div class="content">
                <h3 class="h3">Китайский язык</h3>
                <ul>
                    <li>Одно занятие: от 45 минут</li>
                    <li>
                        Режим занятий: 2 урока в неделю (на индивидуальном плане возможен 1 урок)
                    </li>
                    <li>Размер групп: 3-8 человек, что позволяет продуктивно проводить занятия</li>
                    <li>Преподаватели со стажем работы и высокой языковой квалификацией</li>
                    <li>Эффективная методика обучения</li>
                    <li>Возможны индивидуальные занятия</li>
                    <li>Взрослые и детские группы</li>
                    <li>Зачисление на уровни проводится по результатам бесплатного тестирования</li>
                    <li>Абонемент от <b>6000</b> за 8 занятий</li>
                </ul>
            </div>
            <div class="image">
                <img loading='lazy' src="@/assets/images/chin.jpg" alt="Китайский язык" />
            </div>
        </ProgramComponent>
        <ProgramComponent class="rtl">
            <div class="content">
                <h3 class="h3">Дошкольная подготовка</h3>
                <ul>
                    <li>Одно занятие: 45 минут</li>
                    <li>
                        Режим занятий: 2 урока в неделю (на индивидуальном плане возможен 1 урок)
                    </li>
                    <li>Размер групп: 3-6 человек, что позволяет продуктивно проводить занятия</li>
                    <li>Преподаватели со стажем работы и высокой языковой квалификацией</li>
                    <li>Эффективная методика обучения</li>
                    <li>Возможны индивидуальные занятия</li>
                    <li>Абонемент от <b>4000</b> за 8 занятий</li>
                </ul>
            </div>
            <div class="image">
                <img loading='lazy' src="@/assets/images/school.jpg" alt="Дошкольная подготовка" />
            </div>
        </ProgramComponent>
        <ProgramComponent class="ltr">
            <div class="content">
                <h3 class="h3">Подготовка к ЕГЭ и ОГЭ</h3>
                <ul>
                    <li>Одно занятие: 60 минут</li>
                    <li>Русский язык и математика</li>
                    <li>
                        Режим занятий: 2 урока в неделю (на индивидуальном плане возможен 1-4 урока)
                    </li>
                    <li>Размер групп: 3-8 человек, что позволяет продуктивно проводить занятия</li>
                    <li>Преподаватели со стажем работы и высокой языковой квалификацией</li>
                    <li>Эффективная методика обучения</li>
                    <li>Абонемент от <b>6000</b> за 8 занятий</li>
                </ul>
            </div>
            <div class="image">
                <img loading='lazy' src="@/assets/images/egeoge.jpg" alt="Подготовка к ЕГЭ и ОГЭ" />
            </div>
        </ProgramComponent>
    </ProgramContainerComponent>
    <ConnectBlock />
    <ModalFormComponent v-if="isModalShow" />
</template>
