<template>
    <button class="button" @click="$emit('action')">
        <slot> Данные не получены </slot>
    </button>
</template>
<style lang="scss" scoped>
.button {
    color: var(--white);
    background-color: var(--button-pink);
    border: none;
    padding: 20px;
    display: block;
    margin: 0 auto;
    cursor: pointer;
    font-weight: bold;
    width: 100%;
    max-width: 260px;
    border-radius: 30px;
}
</style>
