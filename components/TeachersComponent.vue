<script lang="ts" setup>
import ContainerComponent from './layout/ContainerComponent.vue'

import teacher0 from '@/assets/images/mock.gif'
import teacher1 from '@/assets/images/mock.gif'
import teacher2 from '@/assets/images/mock.gif'
import teacher3 from '@/assets/images/mock.gif'
import teacher4 from '@/assets/images/mock.gif'

const teachers = [
    {
        id: 0,
        photo: teacher0,
        name: 'Имя',
        text: 'Текст'
    },
    {
        id: 1,
        photo: teacher1,
        name: 'Имя',
        text: 'Текст'
    },
    {
        id: 2,
        photo: teacher2,
        name: 'Имя',
        text: 'Текст'
    },
    {
        id: 3,
        photo: teacher3,
        name: 'Имя',
        text: 'Текст'
    },
    {
        id: 4,
        photo: teacher4,
        name: 'Имя',
        text: 'Текст'
    },
    {
        id: 5,
        photo: teacher4,
        name: 'Имя',
        text: 'Текст'
    }
]
</script>
<template>
    <section :class="$style.teachers">
        <ContainerComponent>
            <div :class="$style.carousel">
                <div :class="$style.inner">
                    <div v-for="(teacher, id) in teachers" :key="id" class="slide">
                        {{ teacher.name }}
                    </div>
                </div>
            </div>
        </ContainerComponent>
    </section>
</template>
<style lang="scss" module>
.teachers {
    * {
        color: blue;
    }
}

.inner {
    display: flex;
    .slide {
        width: 25%;
    }
}
</style>
