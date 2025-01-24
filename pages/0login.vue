<script setup lang="ts">
const login = () => {
    alert('Авторизация в разработке')
}
</script>
<template>
    <section class="login">
        <div class="container">
            <h1>Страница входа</h1>
            <form @submit.prevent>
                <input placeholder="E-mail" type="text" />
                <input placeholder="Пароль" type="password" />
                <button type="submit" @click="login">Войти</button>
            </form>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.login {
    padding: 50px 0;
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1 {
            color: var(--black);
            font-size: 40px;
        }
        form {
            display: flex;
            margin-top: 40px;
            padding: 40px;
            background-color: var(--gray);
            border: 1px solid var(--border-pink);
            border-radius: 10px;
            width: 100%;
            flex-wrap: wrap;
            max-width: 400px;
            input {
                width: 100%;
                margin-bottom: 20px;
                border: none;
                padding: 10px;
            }
            button {
                margin-top: 20px;
                width: 100%;
                padding: 10px;
                border: none;
                background-color: var(--pink);
                cursor: pointer;
                color: var(--white);
            }
        }
    }
}
</style>
