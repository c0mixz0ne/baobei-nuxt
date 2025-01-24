<script setup>
import ContainerComponent from '@/components/layout/ContainerComponent.vue'
</script>
<template>
    <section class="news">
        <ContainerComponent>
            <h2>Последние новости центра</h2>
            <h3>Мы постоянно развиваемся и повышаем качество</h3>
            <ul class="news-list">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </ContainerComponent>
    </section>
</template>
<style scoped>
.news {
    padding: 50px 0;
    .container {
        h2 {
            font-size: 42px;
            text-align: center;
            margin-bottom: 30px;
        }
        h3 {
            font-size: 24px;
            text-align: center;
            font-weight: lighter;
            margin-bottom: 50px;
        }
        .news-list {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-wrap: nowrap;
            gap: 30px;
            li {
                width: 33.3%;
            }
        }
    }
}
</style>
