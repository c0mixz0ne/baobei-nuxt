<script setup lang="ts">
import { shallowRef } from 'vue'
import {
    YandexMap,
    YandexMapDefaultSchemeLayer,
    YandexMapControls,
    YandexMapZoomControl,
    YandexMapMarker,
    YandexMapDefaultFeaturesLayer,
    YandexMapControlButton
} from 'vue-yandex-maps'
import type { BehaviorType } from '@yandex/ymaps3-types';


import type { YMap, LngLat } from '@yandex/ymaps3-types'
import logo from '@/assets/images/logo.png'

const baobeicoordsa: number = import.meta.env.VITE_BAOBEI_COORDS_A
const baobeicoordsb: number = import.meta.env.VITE_BAOBEI_COORDS_B

const markers = [
    {
        coordinates: [baobeicoordsa, baobeicoordsb] as LngLat,
        iconSrc: logo
    }
]

//Можно использовать для различных преобразований
const map = shallowRef<null | YMap>(null)

const openMap = () => {
    const endCoords = [baobeicoordsb, baobeicoordsa] // Координаты конечного пункта маршрута Baobei

    // Формируем URL для Яндекс.Навигатора
    const url = `https://yandex.ru/maps/?rtext=~${endCoords[0]},${endCoords[1]}&rtt=auto`

    // Открытие ссылки в новом окне
    window.open(url, '_blank')
}

const goTaxi = () => {
    const endCoords = [baobeicoordsb, baobeicoordsa] // Координаты конечного пункта маршрута Baobei

    // Формируем URL для Яндекс.Навигатора
    const url = `https://3.redirect.appmetrica.yandex.com/route?start-lat=&start-lon=&end-lat=${endCoords[0]}&end-lon=${endCoords[1]}&tariffClass=business&ref=baobei-online.ru&appmetrica_tracking_id=1178268795219780156`
                 
    // Открытие ссылки в новом окне
    window.open(url, '_blank')
}

const BEHAVIOR: BehaviorType[] = ['drag', 'scrollZoom', 'dblClick', 'mouseRotate', 'mouseTilt'];
</script>
<template>
    <section class="navigation">
        <div class="contacts">
            <h5>Контакты</h5>
            <ul>
                <li><NuxtLink href="tel:+79139178616">+7(913)917-86-16</NuxtLink></li>
                <li><NuxtLink href="mailto:baobei.nsk@gmail.com">baobei.nsk@gmail.com</NuxtLink></li>
                <li>Семьи Шамшиных 18/1, оф. 5</li>
                <li class="time-work">Пн-Пт — 8:00-21:00</li>
                <li class="time-work">Сб-Вс — 9:00-21:00</li>
            </ul>
        </div>
        <yandex-map
            v-model="map"
            :class="[{ map: true }]"
            :settings="{
                location: {
                    center: [baobeicoordsa, baobeicoordsb],
                    zoom: 15
                },
                behaviors: BEHAVIOR
            }"
        >
            <yandex-map-default-scheme-layer />
            <yandex-map-controls :settings="{ position: 'right' }">
                <yandex-map-zoom-control />
            </yandex-map-controls>
            <yandex-map-controls :settings="{ position: 'left bottom' }">
                <yandex-map-control-button class="open-map" @click="openMap">
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxOCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0Y0MyIgZD0iTTcgMGE3IDcgMCAwIDAtNC45NSAxMS45NWMxLjI3IDEuMjcgNC4yNSAzLjEgNC40MiA1LjAzLjAzLjI4LjI0LjUyLjUzLjUyLjI5IDAgLjUtLjI0LjUzLS41Mi4xNy0xLjkzIDMuMTUtMy43NiA0LjQyLTUuMDNBNyA3IDAgMCAwIDcgMHoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNyA5LjQ1YTIuNDUgMi40NSAwIDEgMCAwLTQuOSAyLjQ1IDIuNDUgMCAwIDAgMCA0Ljl6Ii8+PC9zdmc+"
                        alt="Icon"
                    />
                    Как добраться
                </yandex-map-control-button>
                <yandex-map-control-button class="go-taxi" @click="goTaxi">
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI2ZjMCIgZD0iTTQuNSAxQTMuNSAzLjUgMCAwIDAgMSA0LjVWOWgxNlY0LjVBMy41IDMuNSAwIDAgMCAxMy41IDFoLTl6Ii8+PHBhdGggZmlsbD0iI2U2ZTZlNiIgZD0iTTEgOXY0LjVBMy41IDMuNSAwIDAgMCA0LjUgMTdIOVY5SDF6Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTkgOXY4aDQuNWEzLjUgMy41IDAgMCAwIDMuNS0zLjVWOUg5eiIvPjwvc3ZnPg=="
                        alt="Icon"
                    />
                    Доехать на такси
                </yandex-map-control-button>
            </yandex-map-controls>
            <!-- <yandex-map-controls :settings="{ position: 'left top' }">
                <yandex-map-geolocation-control/>
            </yandex-map-controls> -->
            <yandex-map-default-features-layer />
            <yandex-map-marker
                v-for="marker in markers"
                :key="marker.iconSrc"
                position="top-center left-center"
                :settings="{ coordinates: marker.coordinates }"
            >
                <img alt="" class="pin" :src="marker.iconSrc" />
            </yandex-map-marker>
        </yandex-map>
    </section>
</template>
<style lang="scss" scoped>
.map {
    .open-map {
        img {
            vertical-align: middle;
            margin-right: 5px;
        }
    }
    .go-taxi {
        img {
            vertical-align: middle;
            margin-right: 5px;
        }
    }
    // TODO: find fix important rule
    width: 100% !important;
    height: 600px !important;
    .pin {
        cursor: pointer;
        max-width: unset;
        width: 75px;
        height: 75px;
        border-radius: 50%;
    }
}
.navigation {
    position: relative;
    .contacts {
        z-index: 2;
        background-color: var(--border-pink);
        position: absolute;
        top: 50%;
        left: 120px;
        transform: translateY(-50%);
        padding: 60px;
        h5 {
            margin-bottom: 30px;
            font-size: 28px;
            color: var(--white);
            font-weight: bold;
        }
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            color: var(--white);
            li {
                font-weight: lighter;
                margin-bottom: 10px;
                a {
                    text-decoration: none;
                    color: var(--white);
                    font-weight: lighter;
                }
                &.time-work {
                    margin-top: 30px;
                }
            }
            & :last-child {
                margin-bottom: 0;
            }
        }
    }
}

@include breakpoint(md) {
    .navigation {
        display: flex;
        flex-direction: column;
        .contacts {
            position: relative;
            top: unset;
            left: unset;
            transform: unset;
            order: 2;
            padding: 20px;
        }
    }
}

@include breakpoint(sm) {
    .map {
        height: 50svh !important;
    }
}
</style>
