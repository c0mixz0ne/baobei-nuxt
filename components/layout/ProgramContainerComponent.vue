<script setup lang="ts"></script>

<template>
    <section class="programs">
        <slot> Данные не получены </slot>
    </section>
</template>
<style lang="scss" scoped>
.programs {
    background-color: var(--border-pink);
    padding: 120px 0;

    & :first-child {
        margin-top: 0;
    }

    @include breakpoint(sm) {
        padding: 50px 0;
    }
}
</style>
