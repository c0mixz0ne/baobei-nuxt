<script lang="ts" setup>
// import ButtonComponent from '@/components/ButtonComponent.vue'
// import smoothScroll from '@/helpers/smoothScroll'

// const handlerAction = () => {
//     smoothScroll("#form");
// }
</script>
<template>
    <section class="recruitment">
        <div class="image-container">
            <h2>Набор в группы на 2025-2026 учебный год</h2>
        </div>
        <RouterLink class="button-link" to="/group">Запись на занятия</RouterLink>
        <!-- <ButtonComponent @action="handlerAction"> Запись на занятия </ButtonComponent> -->
    </section>
</template>
<style lang="scss" scoped>
.recruitment {
    padding: 30px;
    .button-link {
        color: var(--white);
        background-color: var(--button-pink);
        border: none;
        padding: 20px;
        display: block;
        margin: 0 auto;
        cursor: pointer;
        font-weight: bold;
        width: 100%;
        max-width: 250px;
        text-align: center;
        text-decoration: none;
        font-size: var(--font-size);
    }

    .button,
    .button-link {
        margin-top: 50px;
    }

    .image-container {
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)),
            url(@/assets/images/background2.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 400px;
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding: 30px;
        margin: 0 auto;
        h2 {
            color: var(--white);
            text-align: center;
            font-size: 20px;
            font-weight: lighter;
            margin-top: 30px;
            text-transform: uppercase;
        }
    }
}

@include breakpoint(xs) {
    .recruitment {
        padding: 0;
    }
}
</style>
