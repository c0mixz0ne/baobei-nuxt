<template>
    <div class="program">
        <slot> Данные не получены </slot>
    </div>
</template>
<style lang="scss" scoped>
.program {
    width: 100%;
    // max-width: 960px;
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    margin-top: 120px;

    &.rtl {
        :slotted(.content) {
            order: 1;
            padding-right: 30px;

            @include breakpoint(sm) {
                padding: 0 15px;
            }
        }

        :slotted(.image) {
            order: 2;

            @include breakpoint(sm) {
                padding: 0 15px;
            }
        }
    }

    &.ltr {
        :slotted(.content) {
            order: 2;
            padding-left: 30px;

            @include breakpoint(sm) {
                padding: 0 15px;
                order: 1;
            }
        }

        :slotted(.image) {
            order: 1;

            @include breakpoint(sm) {
                padding: 0 15px;
            }
        }
    }

    :slotted(.content) {
        width: 50%;
        h3 {
            font-weight: bold;
            font-size: 26px;
            margin-bottom: 20px;
        }
        ul {
            padding-left: 15px;
            li {
                font-weight: lighter;
                font-size: 18px;
                line-height: 1.8;
            }
        }

        @include breakpoint(sm) {
            width: 100%;
            margin-bottom: 20px;
        }
    }

    :slotted(.image) {
        width: 50%;
        position: relative;
        img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
        }
        @include breakpoint(sm) {
            width: 100%;
            img {
                position: relative;
                max-height: 400px;
            }
        }
    }

    @include breakpoint(sm) {
        flex-direction: column;
        margin-top: 50px;

        &.rtl,
        &.ltr {
            padding-left: 0;
            padding-right: 0;
        }
    }
}
</style>
