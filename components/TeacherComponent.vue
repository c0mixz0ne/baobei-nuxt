<script lang="ts" setup>
import TeacherSliderComponent from '@/components/TeacherSliderComponent.vue'
import ContainerComponent from '@/components/layout/ContainerComponent.vue'
</script>
<template>
    <section class="teacher">
        <ContainerComponent>
            <h2>Наши преподаватели</h2>
            <p class="teacher-content">
                Обучение - это бесконечный процесс, который никогда не заканчивается. Чем больше мы
                учимся, тем больше мы понимаем, что есть еще так много незнакомого в этом мире, и
                что всегда есть возможность стать лучше и развиваться дальше.
            </p>
        </ContainerComponent>
        <TeacherSliderComponent />
    </section>
</template>
<style lang="scss" scoped>
.teacher {
    padding: 90px 0;
    .container {
        margin-bottom: 40px;
        &.slider-container {
            padding: 0;
        }
        h2 {
            font-size: 42px;
            line-height: 42px;
            text-align: center;
            margin-bottom: 40px;
        }
        p.teacher-content {
            margin: 0 auto;
            max-width: 560px;
            font-size: 24px;
            text-align: center;
            font-weight: lighter;
            line-height: 35px;
        }
    }
}

@include breakpoint(xs) {
    .teacher {
        padding: 40px 0;
    }
}
</style>
