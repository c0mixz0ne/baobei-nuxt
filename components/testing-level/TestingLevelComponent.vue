<script setup lang="ts">
import { formatPhone } from '@/composables/formatInput'
import { validatePhone } from '@/composables/validateInput'

// CEFR
const englishQuestions = [
    {
        question: "I'm looking for my keys.",
        answers: [
            'Я ищу свои ключи',
            'Я смотрю на свои ключи',
            'Я теряю свои ключи',
            'Я покупаю свои ключи'
        ],
        correct: 0
    },
    {
        question: 'Choose the correct sentence:',
        answers: [
            'She go to school every day.',
            'She goes to school every day.',
            'She going to school every day.',
            'She is goes to school every day.'
        ],
        correct: 1
    },
    {
        question: 'What is the past form of “to buy”?',
        answers: ['buyed', 'buying', 'bought', 'buied'],
        correct: 2
    },
    {
        question: 'Choose the correct sentence:',
        answers: ['I will to go tomorrow.', 'I going tomorrow.', 'I will go tomorrow.', 'I goes tomorrow.'],
        correct: 2
    },
    {
        question: 'If it’s cold, you should wear a ____.',
        answers: ['T-shirt', 'Coat', 'Shorts', 'Sandals'],
        correct: 1
    },
    {
        question: 'Tom is from London. He works in a bank and likes playing football on weekends. Where does Tom work?',
        answers: ['In a school', 'In a bank', 'In a shop', 'At home'],
        correct: 1
    },
    {
        question: 'If I ____ enough money, I would buy a car.',
        answers: ['have', 'had', 'will have', 'would have'],
        correct: 1
    },
    {
        question: '“Her performance was outstanding.” — what does it mean?',
        answers: ['very bad', 'average', 'very good', 'unusual'],
        correct: 2
    },
    {
        question: 'Choose the correct sentence:',
        answers: [
            'He suggested to go to the cinema.',
            'He suggested going to the cinema.',
            'He suggested that go to the cinema.',
            'He suggested us to go to the cinema.'
        ],
        correct: 1
    }
]

// HSK
const chineseQuestions = [
    {
        question: '你好 (nǐ hǎo) означает:',
        answers: ['Пока', 'Привет', 'Спасибо', 'Пожалуйста'],
        correct: 1
    },
    {
        question: '我爱你 (wǒ ài nǐ) переводится как:',
        answers: ['Я тебя люблю', 'Я голоден', 'Я устал', 'Как дела?'],
        correct: 0
    },
    {
        question: '他每天去学校 (Tā měitiān qù xuéxiào) — это:',
        answers: ['Он каждый день идёт в школу', 'Он любит школу', 'Он в школе сейчас', 'Он не ходит в школу'],
        correct: 0
    },
    {
        question: 'Сколько тонов в китайском языке?',
        answers: ['3', '4', '5', '6'],
        correct: 1
    },
    {
        question: '“书” (shū) значит:',
        answers: ['Карандаш', 'Стол', 'Книга', 'Рука'],
        correct: 2
    },
    {
        question: 'Выберите правильное предложение:',
        answers: [
            '我喝水',
            '我水喝',
            '喝我水',
            '水我喝的'
        ],
        correct: 0
    },
    {
        question: '他比我高 (Tā bǐ wǒ gāo) означает:',
        answers: ['Он ниже меня', 'Он выше меня', 'Он старше меня', 'Он моложе меня'],
        correct: 1
    },
    {
        question: '成语 “马马虎虎” (mǎmǎhǔhǔ) значит:',
        answers: ['Очень хорошо', 'Так себе', 'Совсем плохо', 'Отлично'],
        correct: 1
    },
    {
        question: '成语 “对牛弹琴” (duì niú tán qín) — это:',
        answers: [
            'Играть музыку для коровы (говорить с тем, кто не понимает)',
            'Играть музыку на улице',
            'Быть упрямым как бык',
            'Петь громко'
        ],
        correct: 0
    }
]

const testType = ref<string | null>(null)
const selectedBackground = ref<string | null>(null)
const currentQuestion = ref(0)
const score = ref(0)
const showResult = ref(false)
const phone = ref('')
const errorPhone = ref<string | undefined>('')
const personalData = ref(false)
const personalDataError = ref(false)
const isFormSubmitted = ref(false)
const formSended = ref(false)

const submitForm = async () => {
    isFormSubmitted.value = true

    if (personalData.value == false) {
        personalDataError.value = true

        errorPhone.value = ''

        return
    } else {
        personalDataError.value = false
    }

    errorPhone.value = validatePhone(phone)

    if (!errorPhone.value) {
        try {
            const response = await useFetch('/api/lead', {
                method: 'POST',
                body: {
                    'name': 'Не указан',
                    'phone': phone,
                    'source': `Заявка с тестирования - уровень (${level.value}), язык = ${testType.value}`
                },
                watch: false
            })

            phone.value = ''

            formSended.value = true
        } catch (error) {
            console.error('Error send data:', error)
        }
    } else {
        console.warn('Input includes errors')
    }

    return true
}

const setLanguage = (newType: string) => {
    testType.value = newType
    currentQuestion.value = 0
    score.value = 0
    showResult.value = false
}

const closeTesting = () => {
    testType.value = null
    selectedBackground.value = null
    currentQuestion.value = 0
    score.value = 0
    showResult.value = false
    errorPhone.value = ''
    personalData.value = false
    personalDataError.value = false
    isFormSubmitted.value = false
}

const formatPhoneHandler = () => {
    phone.value = formatPhone(phone)
}

const backgroundVideo = computed(() => {
    if (selectedBackground.value === 'london') {
        return 'files/videos/london.mp4'
    } else if (selectedBackground.value === 'china') {
        return 'files/videos/china.mp4'
    }
    return null
})

const startTesting = computed(() => !!testType.value)

const questions = computed(() => {
    if (testType.value === 'eng') return englishQuestions
    if (testType.value === 'ch') return chineseQuestions
    return []
})

const selectAnswer = (index: number) => {
    const question = questions.value[currentQuestion.value]
    if (index === question.correct) score.value++
    if (currentQuestion.value < questions.value.length - 1) {
        currentQuestion.value++
    } else {
        showResult.value = true
    }
}

const level = computed(() => {
    if (testType.value === 'eng') {
        if (score.value <= 3) return 'A1 (Beginner - Начальный уровень)'
        if (score.value <= 5) return 'A2 (Elementary - Базовый)'
        if (score.value <= 7) return 'B1 (Intermediate - Средний)'
        if (score.value === 8) return 'B2 (Upper-Intermediate - Выше среднего)'
        return 'C1–C2 (Advanced–Proficient - Продвинутый)'
    } else if (testType.value === 'ch') {
        if (score.value <= 2) return 'HSK1 (初级 - Начальный уровень)'
        if (score.value <= 4) return 'HSK2 (基础 - Базовый)'
        if (score.value <= 6) return 'HSK3 (中级 - Средний)'
        if (score.value <= 8) return 'HSK4 (中高级 - Выше среднего)'
        return 'HSK5–6 (高级 - Продвинутый)'
    }
    return ''
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
    }" class="testing">
        <p v-gsap.to="{
            x: -300,
            scrollTrigger: {
                trigger: '.testing',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
            }
        }" class="testing-text testing-text--first">
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
        </p>

        <p v-gsap.to="{
            x: 300,
            scrollTrigger: {
                trigger: '.testing',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
            }
        }" class="testing-text testing-text--second">
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
        </p>



        <div v-gsap.to="{
            scale: 1,
            opacity: 1,
            scrollTrigger: {
                trigger: '.testing',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
            }
        }" class="testing-block">
            <transition name="fade">
                <video v-if="backgroundVideo" class="testing-block--video" autoplay muted loop playsinline
                    preload="none">
                    <source :src="backgroundVideo" type="video/mp4" />
                </video>
            </transition>
            <transition name="fade">
                <div v-if="startTesting" class="testing-block-questions">
                    <div v-if="!showResult" class="testing-block-questions-action">
                        <p class="testing-block-progress">
                            Вопрос {{ currentQuestion + 1 }} / {{ questions.length }}
                        </p>
                        <p class="testing-block-question-title">
                            {{ questions[currentQuestion].question }}
                        </p>
                        <div class="testing-block-answers">
                            <ButtonComponent v-for="(answer, idx) in questions[currentQuestion].answers" :key="idx"
                                @click="selectAnswer(idx)">
                                {{ answer }}
                            </ButtonComponent>
                        </div>
                    </div>
                    <div v-else class="testing-block-result">
                        <p class="testing-block-result-score">Результат: {{ score }} / {{ questions.length }}</p>
                        <p class="testing-block-result-level">Уровень: <strong>{{ level }}</strong></p>
                        <p v-if="!formSended" class="testing-block-result-info">
                            Чтобы точнее определить уровень знаний, запишись на бесплатное пробное занятие. В форме
                            ниже оставь номер телефона — мы свяжемся с тобой и подберём удобное время
                        </p>
                        <form v-if="!formSended" @submit.prevent="submitForm()">
                            <div class="input-wrapper">
                                <input v-model="phone" name="phone" placeholder="+7 (999) 999-99-99" type="tel"
                                    @input="formatPhoneHandler" />
                                <transition name="fade">
                                    <label v-if="errorPhone" for="phone">{{ errorPhone }}</label>
                                </transition>
                            </div>
                            <ButtonComponent @click="">Отправить</ButtonComponent>
                            <div class="personal-data">
                                <label for="personal">
                                    <input id="personal" class="check" type="checkbox" name="checkbox"
                                        v-model="personalData" />
                                    <div class="checkbox-indicator"></div>
                                    <span class="personal-text">Я даю согласие на обработку моих персональных данных в
                                        соответствии с <NuxtLink target="_blank" to="/personal">Политикой обработки
                                            персональных данных</NuxtLink></span>
                                    <transition name="fade">
                                        <span class="personal-error"
                                            v-if="isFormSubmitted && personalDataError">Необходимо
                                            согласие на обработку персональных данных</span>
                                    </transition>
                                </label>
                            </div>
                        </form>
                        <transition name="fade">
                            <span v-if="formSended" class="form-submit">Спасибо, мы получили номер телефона, в ближайшее
                                время мы с тобой свяжемся для уточнения деталей по записи на пробное занятие</span>
                        </transition>
                        <!-- <ButtonComponent @click="closeTesting">Пройти снова</ButtonComponent> -->
                    </div>
                    <button @click="closeTesting" class="testing-block-close">
                        <svg viewBox="0 0 50 50">
                            <path
                                d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z">
                            </path>
                        </svg>
                    </button>
                </div>
            </transition>
            <h6 v-gsap.whenVisible.from='{ autoAlpha: 0, x: -300 }' class="testing-block--title">
                Проверь свои знания
            </h6>
            <p v-gsap.whenVisible.from='{ autoAlpha: 0, x: +200 }' class="testing-block--text">
                Выбери язык, пройди тестирование и узнай результат
            </p>
            <div v-gsap.whenVisible.from='{ autoAlpha: 0, y: +150 }' class="testing-block--tabs">
                <button v-gsap.magnetic.weak @mouseenter="selectedBackground = 'london'"
                    @mouseleave="selectedBackground = null" @click="setLanguage('eng')">Английский</button>
                <button v-gsap.magnetic.weak @mouseenter="selectedBackground = 'china'"
                    @mouseleave="selectedBackground = null" @click="setLanguage('ch')">Китайский</button>
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
        }" class="testing-text testing-text--three">
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
            Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя Проверь себя
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
    height: 100svh;
    background-color: var(--white);
    padding: 100px 100px 50px 100px;
    overflow: hidden;
    margin-bottom: -30px;

    &-block {
        position: relative;
        overflow: hidden;
        transform: scale(0.2);
        opacity: .7;
        transition: transform 0.3s ease-out;
        height: 70%;
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
        overflow: visible;

        &-result {
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 30px;

            &-score {
                font-weight: bold;
                font-size: 30px;
            }

            &-level {
                text-align: center;
                font-size: 30px;
                color: var(--pink);
                font-weight: lighter;
            }

            &-info {
                max-width: 600px;
                text-align: center;
            }

            form {
                display: flex;
                flex-direction: column;
                gap: 10px;
                max-width: 500px;

                .input-wrapper {
                    width: 100%;
                    position: relative;

                    label {
                        display: block;
                        margin-top: 5px;
                        color: var(--error);
                        position: absolute;
                        top: -30px;
                    }

                    input {
                        color: var(--black);
                        background-color: var(--white);
                        border-radius: 0;
                        border: 0;
                        padding: 0 20px;
                        line-height: 60px;
                        font-size: 16px;
                        width: 100%;
                        border: 1px solid var(--pink);
                        border-radius: 30px;
                    }
                }

                .personal-data {
                    width: 100%;
                    position: relative;

                    label {
                        display: inline-flex;
                        align-items: center;
                        flex-wrap: wrap;
                        cursor: pointer;

                        .check {
                            opacity: 0;
                            z-index: -1;
                            position: absolute;

                            &:checked~.checkbox-indicator {
                                opacity: 1;

                                &::after {
                                    display: block;
                                }
                            }
                        }

                        .checkbox-indicator {
                            min-width: 20px;
                            max-width: 20px;
                            min-height: 20px;
                            max-height: 20px;
                            border: 2px solid var(--black);
                            position: relative;
                            margin-right: 10px;
                            opacity: 0.5;
                            flex: 1;

                            &::after {
                                display: none;
                                border: solid var(--pink);
                                border-width: 0 2px 2px 0;
                                content: '';
                                height: 24px;
                                left: 4px;
                                position: absolute;
                                top: -9px;
                                transform: rotate(45deg);
                                width: 11px;
                            }
                        }

                        .personal-text {
                            color: var(--black);
                            flex: 1;

                            &>a {
                                color: var(--black);
                            }
                        }

                        .personal-error {
                            margin-top: 5px;
                            color: var(--error);
                            position: absolute;
                            bottom: -25px;
                        }
                    }
                }
            }

            .form-submit {
                padding: 0 12px;
                margin-top: 20px;
                color: var(--black);
                display: block;
                text-align: center;
                max-width: 500px;
            }
        }

        &-questions {
            padding: 30px;
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background-color: #fff;
            z-index: 2;
            border-radius: 10px;
            display: flex;

            &-action {
                display: flex;
                width: 100%;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 30px;
            }
        }

        &-close {
            background-color: var(--white);
            border-radius: 50%;
            padding: 0;
            margin: 0;
            border: 0;
            position: absolute;
            right: -20px;
            top: -20px;
            cursor: pointer;

            svg {
                width: 35px;
                height: 35px;
                fill: var(--pink);
                vertical-align: middle;
            }
        }

        &-progress {
            font-weight: bold;
            font-size: 30px;
        }

        &-answers {
            display: flex;
            gap: 20px;

            >button {
                margin: 0;
                font-size: 16px;
            }
        }

        &-question-title {
            font-size: 40px;
        }

        &--video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
            opacity: 1;
            border-radius: 10px;
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
            // flex: 1;
            justify-content: center;
            display: flex;
            align-items: center;
            gap: 60px;

            >button {
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

@include breakpoint(lg) {
    .testing {
        padding: 80px 80px 40px 80px;

        @media screen and (orientation: landscape) {
            height: 120svh;
        }

        @media screen and (orientation: landscape) {
            &-block {
                z-index: 1;
                height: calc(80%);
            }
        }
    }
}

@include breakpoint(md) {
    .testing {
        @media screen and (orientation: landscape) {
            height: 170svh;
        }

        &-block {
            @media screen and (orientation: landscape) {
                height: 80%;
            }
        }
    }
}

@include breakpoint(sm) {
    .testing {
        padding: 30px 30px 20px 30px;


        &-block {
            height: calc(100% - 106px);

            &-close {
                right: -5px;
                top: -5px;
            }

            &--tabs {
                gap: 30px;
            }
        }
    }
}

@include breakpoint(xs) {
    .testing {
        padding: 15px 15px 15px 15px;
        // height: calc(100svh + 100px);

        &-block {
            &-questions {
                padding: 15px;
            }

            &-result {
                gap: 10px;

                &-level {
                    font-size: 20px;
                }

                form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .input-wrapper {
                        max-width: 260px;

                        >input {
                            line-height: 52px;
                        }
                    }
                }
            }

            &-question-title {
                font-size: 22px;
            }

            &-answers {
                flex-direction: column;

                >button {
                    padding: 10px;
                }
            }

            &--title {
                font-size: 30px;
            }

            &--text {
                font-size: 20px;
            }

            &--tabs {
                gap: 20px;
                flex-direction: column;
            }
        }
    }
}

@media (max-width: 350px) {
    .testing {
        height: calc(100svh + 90px);

        &-block {
            &-result {
                &-level {
                    font-size: 15px;
                }

                &-score {
                    font-size: 20px;
                }

                &-info {
                    font-size: 12px;
                }

                form {
                    .personal-data {
                        label {
                            .personal-text {
                                font-size: 12px;
                            }
                        }
                    }
                }
            }
        }
    }
}

// Transition
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
