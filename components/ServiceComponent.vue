<script setup lang="ts">
import ContainerComponent from '@/components/layout/ContainerComponent.vue'
</script>
<template>
    <section class="service">
        <h2>Наши услуги</h2>
        <h3>
            У нас вы найдете все услуги, необходимые для гармоничного и всестороннего развития
            личности ребенка и подростка
        </h3>
        <ContainerComponent>
            <ul>
                <li>
                    <div class="card">
                        <div class="card-image"></div>
                        <div class="card-content">
                            <h4>Английский язык</h4>
                            <p>
                                Изучение английского языка - это ключ к миру возможностей, знание
                                английского открывает двери к новым знаниям, культурам и
                                возможностям.
                            </p>
                            <RouterLink class="card-link" to="/program">Подробнее →</RouterLink>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <div class="card-image"></div>
                        <div class="card-content">
                            <h4>Дошкольная подготовка</h4>
                            <p>
                                Дошкольная подготовка - это фундамент, на котором строится будущее
                                ребенка. Она обеспечивает ему необходимый запас знаний и навыков для
                                успешного старта в школе и в жизни.
                            </p>
                            <RouterLink class="card-link" to="/program">Подробнее →</RouterLink>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <div class="card-image"></div>
                        <div class="card-content">
                            <h4>Китайский язык</h4>
                            <p>
                                Изучение китайского языка - это широкие возможности для понимания
                                культуры, сознания и сердца народа, который воплощает в себе
                                богатство и мудрость тысячелетий.
                            </p>
                            <RouterLink class="card-link" to="/program">Подробнее →</RouterLink>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <div class="card-image"></div>
                        <div class="card-content">
                            <h4>Подготовка к экзаменам</h4>
                            <p>
                                Подготовка к экзаменам помогает преодолеть испытание знаниями,
                                развивает нашу силу воли, настойчивость и умение преодолевать
                                трудности. В нашем центре реализуется подготовка к ОГЭ, ЕГЭ по
                                математике и русскому языку
                            </p>
                            <RouterLink class="card-link" to="/program">Подробнее →</RouterLink>
                        </div>
                    </div>
                </li>
            </ul>
        </ContainerComponent>
    </section>
</template>
<style lang="scss" scoped>
.service {
    h2 {
        font-size: 42px;
        text-align: center;
        margin: 30px 0;
    }
    h3 {
        font-size: 24px;
        text-align: center;
        font-weight: lighter;
        max-width: 600px;
        margin: 0 auto;
        margin-bottom: 70px;
    }
    ul {
        list-style-type: none;
        padding: 0;
        display: grid;
        grid-template-columns: 2fr 2fr;
        grid-gap: 40px;
        li {
            width: 100%;
            .card {
                background-color: var(--card-pink);
                display: flex;
                height: 100%;
                .card-image {
                    min-width: 135px;
                }
                .card-content {
                    width: 100%;
                    padding: 30px 30px 40px;
                    display: flex;
                    flex-direction: column;
                    h4 {
                        margin-bottom: 15px;
                        font-weight: bold;
                        font-size: 22px;
                    }
                    p {
                        font-weight: lighter;
                        font-size: 18px;
                        line-height: 25px;
                        margin-bottom: 20px;
                    }
                    a {
                        margin-top: auto;
                    }
                }
                .card-link {
                    color: var(--card-gray);
                    font-size: 16px;
                    font-weight: bold;
                    text-decoration: none;
                }
            }
            &:nth-child(1) {
                .card {
                    .card-image {
                        background-image: url(@/assets/images/service1.jpg);
                        background-size: cover;
                        background-position: center;
                    }
                }
            }
            &:nth-child(2) {
                .card {
                    .card-image {
                        background-image: url(@/assets/images/service2.jpg);
                        background-size: cover;
                        background-position: center;
                    }
                }
            }
            &:nth-child(3) {
                .card {
                    .card-image {
                        background-image: url(@/assets/images/service3.jpg);
                        background-size: cover;
                        background-position: center;
                    }
                }
            }
            &:nth-child(4) {
                .card {
                    .card-image {
                        background-image: url(@/assets/images/service4.jpg);
                        background-size: cover;
                        background-position: center;
                    }
                }
            }
        }
    }
}
@include breakpoint(md) {
    .service {
        ul {
            li {
                .card {
                    .card-content {
                        padding: 10px;
                        p {
                            font-size: 15px;
                        }
                    }
                }
            }
        }
    }
}

@include breakpoint(sm) {
    .service {
        ul {
            grid-template-columns: 1fr;
        }
    }
}

@include breakpoint(xs) {
    .service {
        ul {
            li {
                .card {
                    flex-direction: column;
                    .card-image {
                        min-height: 300px;
                    }
                }
            }
        }
    }
}
</style>
