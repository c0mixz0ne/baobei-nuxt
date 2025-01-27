<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ContainerComponent from '@/components/layout/ContainerComponent.vue'

const mobileMenuIsOpen = ref<boolean>(false)

const toggleMobileMenu = () => {
    mobileMenuIsOpen.value = !mobileMenuIsOpen.value
}

const resizeHandler = () => {
    if (window.innerWidth > 575) {
        mobileMenuIsOpen.value = false
    }
}

const scrollHandler = () => {
    if (mobileMenuIsOpen.value) {
        mobileMenuIsOpen.value = false
    }
}

const inDev = () => {
    alert("Личный кабинет в разработке")
}

onMounted(() => {
    resizeHandler()
    window.addEventListener('resize', resizeHandler, { passive: true })
    window.addEventListener('scroll', scrollHandler, { passive: true })
})

onUnmounted(() => {
    resizeHandler()
    window.removeEventListener('resize', resizeHandler)
    window.removeEventListener('scroll', scrollHandler)
})
</script>
<template>
    <header class="header">
        <ContainerComponent>
            <NuxtLink to="/">
                <img class="logo" src="@/assets/images/logo.jpg" alt="Логотип" />
            </NuxtLink>
            <nav>
                <ul class="desktop">
                    <li>
                        <NuxtLink to="/">Главная</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/program">Программы</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/group">Набор</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink @click="inDev">Войти</NuxtLink>
                    </li>
                </ul>
                <ul class="mobile">
                    <li>
                        <button class="burger-menu" @click="toggleMobileMenu">
                            <svg v-if="!mobileMenuIsOpen" viewBox="0 0 50 50">
                                <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" ></path>
                            </svg>
                            <svg v-if="mobileMenuIsOpen" viewBox="0 0 50 50">
                                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" ></path>
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </ContainerComponent>
        <Transition>
            <div v-if="mobileMenuIsOpen" class="mobile-menu">
                <ul>
                    <li>
                        <NuxtLink to="/" @click="toggleMobileMenu">Главная</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/program" @click="toggleMobileMenu">Программы</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/group" @click="toggleMobileMenu">Набор</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink @click="inDev">Войти</NuxtLink>
                    </li>
                </ul>
            </div>
        </Transition>
    </header>
</template>
<style lang="scss" scoped>
.header {
    background-color: var(--gray);
    height: 90px;
    padding: 10px 0;
    border-bottom: 1px solid var(--pink);
    position: sticky;
    z-index: 5;
    top: 0;
    .logo {
        width: 62px;
        height: 70px;
        vertical-align: middle;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        nav {
            width: 100%;
            margin-left: 10px;

            ul {
                display: flex;
                gap: 15px;
                list-style-type: none;
                margin: 0;
                padding: 0;
                &.mobile {
                    display: none;
                }

                li {
                    a {
                        text-decoration: none;
                        color: var(--black);
                        cursor: pointer;
                    }

                    a.router-link-active {
                        color: var(--pink);
                    }
                    button.burger-menu {
                        background-color: transparent;
                        border: 0;
                        cursor: pointer;
                        padding: 0;
                        svg {
                            width: 25px;
                            height: 25px;
                        }
                    }
                }

                & :last-child {
                    margin-left: auto;
                }
            }
        }
    }

    .mobile-menu {
        position: absolute;
        width: 100%;
        height: 50px;
        top: 58px;
        left: 0;
        background-color: var(--white-opacity);

        ul {
            height: 100%;
            list-style-type: none;
            margin: 0;
            padding: 0 15px;
            display: flex;
            align-items: center;
            li {
                margin-right: 10px;

                a {
                    text-decoration: none;
                    color: var(--black);

                }
                a.router-link-active {
                    color: var(--pink);
                }

                &:last-child {
                    margin-right: 0;
                    margin-left: auto;
                }
            }
        }
    }
}

@include breakpoint(xs) {
    .header {
        height: 60px;
        .logo {
            height: 40px;
            width: 36px;
        }

        .container {
            nav {
                ul {
                    &.mobile {
                        display: flex;
                    }
                    &.desktop {
                        display: none;
                    }
                }
            }
        }
    }
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
