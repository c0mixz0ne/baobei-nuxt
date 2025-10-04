<script setup lang="ts">

const testType = ref<string | null>(null)
const selectedBackground = ref<string | null>(null)

const setLanguage = (newType: string) => {
    testType.value = newType
}

const backgroundVideo = computed(() => {
  if (selectedBackground.value === 'london') {
    return 'files/videos/london.mp4'
  } else if (selectedBackground.value === 'china') {
    return 'files/videos/china.mp4'
  }
  return null
})

const startTesting = computed(() => {
    if (testType.value) {
        console.log('run');
    }
})

</script>

<template>
    <section v-gsap.to="{
        scrollTrigger: {
            trigger: '.testing',
            start: 'top top',
            end: '+=100%',
            scrub: true,
            pin: true,
        }
    }"
    class="testing">
        <p v-gsap.to="{
            x: -300,
            scrollTrigger: {
                trigger: '.testing',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
            }
        }"
        class="testing-text testing-text--first">
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
        </p>

        <p v-gsap.to="{
            x: 300,
            scrollTrigger: {
                trigger: '.testing',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
            }
        }"
        class="testing-text testing-text--second">
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
        </p>

        

        <div v-gsap.to="{
            scale: 1,
            scrollTrigger: {
                trigger: '.testing',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
            }
        }"
        class="testing-block">
            <transition name="fade">
                <video
                    v-if="backgroundVideo"
                    class="testing-block--video"
                    autoplay
                    muted
                    loop
                    playsinline
                >
                <source :src="backgroundVideo" type="video/mp4" />
                </video>
            </transition>
           <h6 v-gsap.whenVisible.from='{ autoAlpha: 0, x: -300 }' class="testing-block--title">
                Проверь свои знания
           </h6>
           <p v-gsap.whenVisible.from='{ autoAlpha: 0, x: +200 }' class="testing-block--text">
                Выбери язык, пройди тестирование, узнай результат
           </p>
           <div v-gsap.whenVisible.from='{ autoAlpha: 0, y: +150 }' class="testing-block--tabs">
                <button v-gsap.magnetic.strong @mouseenter="selectedBackground = 'london'" @mouseleave="selectedBackground = null" @click="setLanguage('eng')">Английский</button>
                <button v-gsap.magnetic.strong @mouseenter="selectedBackground = 'china'" @mouseleave="selectedBackground = null" @click="setLanguage('ch')">Китайский</button>
           </div>
        </div>

        <p v-gsap.to="{
            x: 500,
            scrollTrigger: {
                trigger: '.testing',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
            }
        }"
        class="testing-text testing-text--three">
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
        </p>
    </section>
</template>

<style lang="scss" scoped>
@font-face {
    font-family: 'PaluiSP';
    src: url('@/assets/fonts/PaluiSP-Bold.ttf');
}
.testing {
    position: relative;
    min-height: 100vh;
    background-color: var(--white);
    padding: 100px 100px 50px 100px;
    overflow: hidden;
    margin-bottom: -30px;

    &-block {
        position: relative;
        overflow: hidden;
        transform: scale(0);
        transition: transform 0.3s ease-out;
        min-height: 60svh;
        background-color: var(--gray);
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)),
            url(@/assets/images/testing-background.jpg);
        background-size: cover;
        background-position: center center;
        border-radius: 10px;
        box-shadow: 0px 0px 17px -6px rgba(34, 60, 80, 0.2);
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        justify-content: center;
        align-items: center;

        &--video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
            opacity: 1;
        }

        &--title,
        &--text,
        &--tabs {
        position: relative;
        z-index: 1;
        }
        
        &--title {
            text-align: center;
            font-size: 40px;
            color: var(--white);
            font-weight: lighter;
        }

        &--text {
            text-align: center;
            font-size: 30px;
            color: var(--white);
            font-weight: lighter;
        }

        &--tabs {
            flex: 1;
            justify-content: center;
            display: flex;
            align-items: center;
            gap: 60px;
            > button {
                background-color: var(--pink);
                color: var(--white);
                border: none;
                font-size: 16px;
                padding: 20px;
                border-radius: 40px;
                cursor: pointer;
                min-width: 150px;
            }
        }
    }
    
    &-text {
        font-family: 'PaluiSP';
        white-space: nowrap;

        &--first {
            font-size: 60px;
            transform: translateX(-50%) rotate(10deg);
            color: var(--black);
        }

        &--second {
            font-size: 50px;
            transform: translateX(-50%) rotate(-10deg);
            color: var(--pink);
        }

        &--three {
            font-size: 70px;
            transform: translateX(-50%) rotate(15deg);
            color: var(--pink);
        }
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
</style>
