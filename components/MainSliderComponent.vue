<script lang="ts">
// TODO: rewrite to script setup
import smoothScroll from '@/composables/smoothScroll'

import slide1 from '@/assets/images/slider1.jpg'
import slide2 from '@/assets/images/slider2.jpg'

export default {
    data() {
        return {
            currentIndex: 0,
            intervalId: 0,
            slides: [
                {
                    background: `linear-gradient(rgba(44,55,69,0.8), rgba(44,55,69,0.6)), url(${slide1})`,
                    title: 'Запишись на бесплатный пробный урок',
                    text: 'Запись в группы и на индивидуальные занятия ведется круглогодично'
                },
                {
                    background: `linear-gradient(rgba(44,55,69,0.8), rgba(44,55,69,0.6)), url(${slide2})`,
                    title: 'При покупке абонемента в день пробного занятия скидка на абонемент 10%',
                    text: 'Акция действует с 1 августа по 5 сентября'
                }
            ]
        }
    },
    mounted() {
        this.startAutoPlay()
    },
    beforeUnmount() {
        this.stopAutoPlay()
    },
    methods: {
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length
        },
        startAutoPlay() {
            this.intervalId = Number(setInterval(this.nextSlide, 3000))
        },
        stopAutoPlay() {
            clearInterval(this.intervalId)
        },
        buttonClick(target) {
            smoothScroll(target)
        }
    }
}
</script>
<template>
    <div class="slider" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
        <transition name="fade">
            <div
                :key="currentIndex"
                class="slide"
                :style="{ backgroundImage: slides[currentIndex].background }"
            >
                <div class="content">
                    <p class="title">{{ slides[currentIndex].title }}</p>
                    <p class="text">{{ slides[currentIndex].text }}</p>
                    <button class="slide-button" @click="buttonClick('#form')">Записаться</button>
                </div>
            </div>
        </transition>
        <button class="nav-button prev" @click="prevSlide">‹</button>
        <button class="nav-button next" @click="nextSlide">›</button>
    </div>
</template>
<style lang="scss" scoped>
.slider {
    position: relative;
    width: 100%;
    height: 70vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.slide {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s ease;

    .slide-button {
        background: transparent;
        border-radius: 30px;
        font-size: 16px;
        color: #fff;
        border: 2px solid #f0d9db;
        padding: 20px 60px;
        cursor: pointer;
    }
}

.content {
    text-align: center;
    .title {
        font-size: 42px;
        max-width: 70%;
        margin: 0 auto;
        margin-bottom: 50px;
    }

    .text {
        margin-bottom: 50px;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.nav-button {
    position: absolute;
    top: 50%;
    border-radius: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.8);
    color: black;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 1;
    display: flex;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
}

.prev {
    left: 20px;
}

.next {
    right: 20px;
}

@include breakpoint(sm) {
    .slider {
        height: 80svh;
        min-height: 300px;
    }
    .content {
        .title {
            font-size: 32px;
        }
    }
}

@include breakpoint(xs) {
    .content {
        .title {
            font-size: 20px;
        }
    }
    .next {
        right: 5px;
    }
    .prev {
        left: 5px;
    }
}
</style>
