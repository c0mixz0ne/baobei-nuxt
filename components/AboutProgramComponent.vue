<template>
    <section class="about-program">
        <h2>
            Образовательный центр - это не только место, где получают знания, но и поддержку,
            мотивацию и направление для тех кто стремится к обучению.
        </h2>
    </section>
</template>
<style lang="scss" scoped>
.about-program {
    padding: 90px 10px;
    h2 {
        font-size: 28px;
        line-height: 44px;
        max-width: 620px;
        margin: 0 auto;
        text-align: center;
        font-weight: lighter;
    }

    @include breakpoint(sm) {
        padding: 40px 10px;
        h2 {
            font-size: 18px;
            line-height: 30px;
        }
    }
}
</style>
