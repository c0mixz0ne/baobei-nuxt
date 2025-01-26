<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { ref } from 'vue'
import ContainerComponent from '@/components/layout/ContainerComponent.vue'

import teacher0 from '@/assets/images/av.jpg'
import teacher1 from '@/assets/images/ed.jpg'
import teacher2 from '@/assets/images/sm.jpg'
import teacher3 from '@/assets/images/ba.jpg'
import teacher4 from '@/assets/images/avl.jpg'
import teacher5 from '@/assets/images/sk.jpg'

// Carousel configuration
const config = {
    autoplay: 5000,
    wrapAround: true,
    pauseAutoplayOnHover: true,
    mouseDrag: true,
    touchDrag: true,
    itemsToShow: 1,
    snapAlign: 'center',
    gap: 40,

    // 'breakpointMode' determines how the carousel breakpoints are calculated
    // Acceptable values: 'viewport' (default) | 'carousel'
    // 'viewport' - breakpoints are based on the viewport width
    // 'carousel' - breakpoints are based on the carousel width
    breakpointMode: 'carousel',

    // Breakpoints are mobile-first
    // Any settings not specified will fall back to the carousel's default settings
    breakpoints: {
        // 400px and up
        450: {
            itemsToShow: 2,
            snapAlign: 'center'
        },
        // 700px and up
        700: {
            itemsToShow: 3,
            snapAlign: 'start'
        },
        // 1100px and up
        1100: {
            itemsToShow: 4,
            snapAlign: 'start'
        }
    }
}

// TODO: create DB and get data from DB
const cards = [
    {
        id: 0,
        photo: teacher0,
        name: 'Аладьина Вероника',
        text: 'Руководитель детского центра Методист экзаменационного направления'
    },
    {
        id: 1,
        photo: teacher1,
        name: 'Ёлгина Дарья',
        text: 'Преподаватель индивидуальных и групповых занятий по английскому языку'
    },
    {
        id: 2,
        photo: teacher2,
        name: 'Смирнова Маргарита',
        text: 'Преподаватель индивидуальных и групповых занятий по английскому языку'
    },
    {
        id: 3,
        photo: teacher3,
        name: 'Барановская Александра',
        text: 'Преподаватель индивидуальных и групповых занятий по английскому языку'
    },
    {
        id: 4,
        photo: teacher4,
        name: 'Абрамов Владимир',
        text: 'Преподаватель индивидуальных и групповых занятий по китайскому языку'
    },
    {
        id: 5,
        photo: teacher5,
        name: 'Сафонова Кристина',
        text: 'Преподаватель занятий по русскому языку'
    }
]

const carouselRef = ref()
const currentSlide = ref(0)

const next = () => carouselRef.value.next()
const prev = () => carouselRef.value.prev()
</script>

<template>
    <ContainerComponent class="slider-container">
        <Carousel v-bind="config" ref="carouselRef" v-model="currentSlide" class="cr-custom">
            <Slide v-for="card in cards" :key="card.name">
                <div class="carousel__item">
                    <img :src="card.photo" alt="Аватар" />
                    <div class="slider-content">
                        <div class="slider-name">
                            {{ card.name }}
                        </div>
                        <div class="slider-text">
                            {{ card.text }}
                        </div>
                    </div>
                </div>
            </Slide>
        </Carousel>

        <div class="custom-arrows">
            <button class="prev-arrow" @click="prev">
                <svg role="presentation" focusable="false" viewBox="0 0 8.6 14">
                    <polyline
                        fill="none"
                        stroke-linecap="butt"
                        stroke-width="2"
                        points="1,1 7,7 1,13"
                    ></polyline>
                </svg>
            </button>
            <button class="next-arrow" @click="next">
                <svg role="presentation" focusable="false" viewBox="0 0 8.6 14">
                    <polyline
                        fill="none"
                        stroke-linecap="butt"
                        stroke-width="2"
                        points="1,1 7,7 1,13"
                    ></polyline>
                </svg>
            </button>
        </div>
    </ContainerComponent>
</template>

<style lang="scss" scoped>
.carousel__slide {
    padding-bottom: 15px;
}

.slider-container {
    position: relative;
    .custom-arrows {
        display: contents;
        .prev-arrow,
        .next-arrow {
            position: absolute;
            top: 50%;
            background: transparent;
            border: 1px solid var(--black);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            transform: translateY(-50%);
            z-index: 1;
            cursor: pointer;
            svg {
                width: 14px;
                height: 8px;
                polyline {
                    stroke: var(--black);
                }
            }
        }
        .prev-arrow {
            left: -40px;
            svg {
                transform: rotate(180deg);
            }
        }
        .next-arrow {
            right: -40px;
        }
    }
}

.carousel__item {
    background-color: var(--slider-background);
    width: 100%;
    height: 100%;
    // box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 1px 2px 15px 0px rgba(34, 60, 80, 0.1);
    img {
        vertical-align: middle;
        width: 100%;
        min-height: 270px;
        object-fit: cover;
        max-height: 400px;
        border-top: 1px solid var(--border-pink);
        border-left: 1px solid var(--border-pink);
    }
    .slider-content {
        padding: 18px 20px;
        .slider-name {
            text-align: left;
            font-weight: bold;
            font-size: 16px;
        }
        .slider-text {
            margin-top: 8px;
            text-align: left;
            font-size: 14px;
            font-weight: lighter;
        }
    }
}

@include custom-breakpoint(1420px) {
    .slider-container {
        .custom-arrows {
            .prev-arrow,
            .next-arrow {
                border: 1px solid var(--white);
                svg {
                    polyline {
                        stroke: var(--white);
                    }
                }
            }
            .prev-arrow {
                left: 20px;
            }
            .next-arrow {
                right: 20px;
            }
        }
    }
}
</style>
