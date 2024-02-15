<template>
    <section ref="clientsSection" class="clients-section" id="clients">
        <div class="clients-container">
            <div class="headline-container">
                <h3 ref="experienceHeadline" class="clients-headline">Experience spanning some of the best brands in the world.</h3>
            </div>
            <img ref="experienceClients" src="../assets/images/clients-experience.webp" alt="client logos for Samsung, IBM, Xbox, Motorol=la, Southwest airlines, Miller Coors, Hyundai, Pfizer, Kraft, Cadillac, Whirlpool, Patron Tequila, Grey Goose Vodka" class="experience-grid">
            <img ref="experienceMark" src="../assets/images/clients-experience-20-YRS.webp" alt="Twenty years +" class="header-mark">
        </div>
    </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import scrollTrigger from 'gsap/dist/ScrollTrigger'

const clientsSection = ref<HTMLElement | null>(null)
const experienceClients = ref<HTMLElement | null>(null)
const experienceMark = ref<HTMLElement | null>(null)
const experienceHeadline = ref<HTMLElement | null>(null)

// const aboutOverview = ref<HTMLElement | null>(null)
const isReducedMotion = ref(true)

onMounted(() => {
    // check for isReducedMotion before setting up animations
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    isReducedMotion.value = mediaQuery.matches
    if(!isReducedMotion.value) {
        configureTweens()
    }
})
function configureTweens() {

    const mainTL = gsap.timeline();
    mainTL.fromTo(experienceMark.value, {autoAlpha:0, x: '-30px'}, {autoAlpha:1, x: 0, duration: 1, ease: 'power3.out'});
    mainTL.fromTo(experienceClients.value, {autoAlpha:0, x: '30px'}, {autoAlpha:1, x: 0, duration: 1.25, ease: 'power3.out'}, '<');
    mainTL.fromTo(experienceHeadline.value, {autoAlpha:0, x: '-30px'}, {autoAlpha:1, x: 0, duration: 1.25, ease: 'power3.out'}, '<0.3');

    const mainST = scrollTrigger.create({
                animation: mainTL,
                trigger: clientsSection.value, 
                // markers: true,
                start: 'top 65%',
                end: 'center 12%',
                toggleActions: 'play reverse play reverse'})
}
</script>

<style lang="scss">
    .clients-section {
        background-color: $color--brand-yellow;
        padding: 2.5rem 1rem 0 1rem;
        position: relative;
        display: flex;
        justify-content: center;

        @media (min-width: $break-md) {
            padding: 3.75rem 5rem 0 5rem;
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
    .header-mark {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .clients-headline {
        position: absolute;
        top: 50%;
        width: 45%;
        font-size: fluid-calc(1rem, 2rem);
        line-height: 1.1;
        color: $color--brand-blue-90;
    }
</style>