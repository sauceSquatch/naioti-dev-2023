<template>
    <section ref="clientsSection" class="clients-section" id="clients">
        <div class="clients-container">
            <div class="headline-container">
                <h3 class="clients-headline">Experience spanning some of the best brands in the world.</h3>
            </div>
            <img src="../assets/images/clients-experience.webp" alt="client logos for Samsung, IBM, Xbox, Motorol=la, Southwest airlines, Miller Coors, Hyundai, Pfizer, Kraft, Cadillac, Whirlpool, Patron Tequila, Grey Goose Vodka" class="experience-grid">
        </div>
    </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import scrollTrigger from 'gsap/dist/ScrollTrigger'
import splitText from 'gsap/dist/SplitText';

// const aboutOverview = ref<HTMLElement | null>(null)
const isReducedMotion = ref(true)

onMounted(() => {
    // check for isReducedMotion before setting up animations
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    isReducedMotion.value = mediaQuery.matches
    console.log('Hero section  | reduced motion value:  ', isReducedMotion.value)
    if(!isReducedMotion.value) {
        configureTweens()
    }
})
function configureTweens() {

    const mainTL = gsap.timeline();
    // mainTL.fromTo('.austin-cloud1', {y: 555 * widthFactor}, { y: -600 * widthFactor});

}
</script>

<style lang="scss">
    .clients-section {
        background-color: $color--brand-yellow;
        padding: 40px 20px;
        position: relative;
        display: flex;
        justify-content: center;

        @media (min-width: $break-md) {
            padding: 60px 80px;
        }
    }
    .clients-container {
        position: relative;
        width: 100%;
        max-width: 1100px;
    }

    .experience-grid {
        width: 100%;
    }

    .clients-headline {
        position: absolute;
        top: 50%;
        width: 45%;
        font-size: fluid-calc(18px, 32px);
        line-height: 1.1;
        color: $color--brand-blue-90;
    }
</style>