<script lang="ts" setup>
import ContainerComponent from '@/components/layout/ContainerComponent.vue'
</script>
<template>
    <section class="about">
        <ContainerComponent>
            <div class="info">
                <div class="content">
                    <h2>О нас</h2>
                    <ul>
                        <li>6 Лет центру в оффлайн.</li>
                        <li>2 иностранных языка: английский и китайский.</li>
                        <li>Подготовка к ОГЭ к ЕГЭ.</li>
                        <li>Лицензия на образовательную деятельность.</li>
                        <li>150 учеников занимается в год.</li>
                        <li>94% учеников успешно сдали экзамен в 2022 году.</li>
                        <li>
                            Структурированная команда: руководитель, академический руководитель,
                            администратор, 8 преподавателей, 2 носителя китайского языка.
                        </li>
                    </ul>
                </div>
                <div class="image">
                    <img src="@/assets/images/about.jpg" alt="About" />
                </div>
            </div>
        </ContainerComponent>
        <div class="list">
            <ContainerComponent>
                <ul>
                    <li>
                        <h4>7 лет работы</h4>
                        <p>Качественное образование, проверенное временем</p>
                    </li>
                    <li>
                        <h4>8 преподавателей</h4>
                        <p>Лучшие преподаватели, постоянно проходящие повышение квалификации</p>
                    </li>
                    <li>
                        <h4>Филиал в центре</h4>
                        <p>10 минут ходьбы от метро "Площадь Ленина"</p>
                    </li>
                    <li>
                        <h4>900 довольных учеников</h4>
                        <p>Наш главный приоритет — качество образования и комфорт воспитанников</p>
                    </li>
                </ul>
            </ContainerComponent>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.about {
    background-color: var(--card-pink);
    padding-top: 60px;
    .container {
        display: flex;
        flex-direction: column;
        .info {
            display: flex;
            flex-direction: row;
            gap: 60px;
            margin-bottom: 60px;
            .content {
                width: 50%;
                h2 {
                    font-size: 42px;
                    margin-bottom: 28px;
                }
                ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    li {
                        font-size: 18px;
                        line-height: 30px;
                        font-weight: lighter;
                    }
                }
            }
            .image {
                width: 50%;
                img {
                    width: 100%;
                    vertical-align: middle;
                    object-fit: contain;
                    height: 100%;
                }
            }
        }
    }
    .list {
        background-color: var(--card-gray);
        ul {
            list-style-type: none;
            margin: 0;
            padding: 75px 0;
            display: flex;
            li {
                width: 25%;
                border-right: 2px solid var(--border-pink);
                padding: 10px 30px;
                text-align: center;
                color: var(--white);
                h4 {
                    font-size: 17px;
                    padding-top: 5px;
                    padding-bottom: 20px;
                    font-weight: normal;
                }
                p {
                    font-weight: lighter;
                }
            }
            & :last-child {
                border-right: 0;
            }
        }
    }
}

@include breakpoint(md) {
    .about {
        .container {
            .info {
                flex-direction: column;
                gap: 60px;
                .content {
                    width: 100%;
                }
                .image {
                    width: 100%;
                }
            }
        }
        .list {
            ul {
                flex-wrap: wrap;
                padding: 25px 0;
                li {
                    width: 50%;
                    border-right: 0;
                    position: relative;
                    margin-bottom: 25px;
                    padding: 10px;
                    &::after {
                        content: '';
                        display: block;
                        position: absolute;
                        bottom: -10px;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 50%;
                        height: 2px;
                        background-color: var(--border-pink);
                    }
                }
            }
        }
    }
}

@include breakpoint(sm) {
    .about {
        .list {
            ul {
                li {
                    width: 100%;
                }
            }
        }
    }
}
</style>
