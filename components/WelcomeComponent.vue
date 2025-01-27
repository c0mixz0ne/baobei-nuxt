<template>
    <section class="welcome">
        <slot> Данные не получены </slot>
    </section>
</template>
<style lang="scss" scoped>
.welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100dvh - 90px);
    min-height: 250px;
    background-image: linear-gradient(rgba(44, 55, 69, 0.8), rgba(44, 55, 69, 0.6)),
        url(@/assets/images/background1.jpg);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    padding: 0 30px;
    &.program {
        background-image: linear-gradient(rgba(44, 55, 69, 0.8), rgba(44, 55, 69, 0.6)),
            url(@/assets/images/background-program.jpg);
        height: calc(60vh - 90px);
    }
    &.groups {
        background-image: linear-gradient(rgba(240, 217, 219, 0.6), rgba(147, 114, 117, 0.8)),
            url(@/assets/images/background-group.jpg);
        height: calc(80svh - 90px);
        background-position: center;
    }
    :slotted(h1) {
        color: var(--white);
        text-align: center;
        font-size: 52px;
        span {
            display: block;
        }

        @include breakpoint(sm) {
            font-size: 42px;
        }

        @include breakpoint(xs) {
            font-size: 32px;
        }
    }
    :slotted(h2) {
        color: var(--white);
        text-align: center;
        font-size: 20px;
        font-weight: lighter;
        margin-top: 30px;
    }
}

// @include breakpoint(sm) {
//     .welcome {
//         h1 {
//             font-size: 42px;
//         }
//     }
// }

@include breakpoint(xs) {
    .welcome {
        height: calc(100svh - 60px);
        padding: 10px;
        // h1 {
        //     font-size: 32px;
        // }
    }
}
</style>
