<template>
    <section ref="connectSection" class="connect-section">
        <h4 class="connect-header">
            <span ref="contactHeader1" class="connect-header1">Let's</span>
            <span ref="contactHeader2" class="connect-header2">Chat</span>
        </h4>
        <div class="social-icons">
            <a href="https://www.linkedin.com/in/naioti/"
                target="_blank"
                rel="external"
                class="connect-social-button">
                <img class="connect-social-icon" src="../assets/images/social-icon-LinkedIn.svg" alt="linkedin">
            </a>
            <a href="https://www.instagram.com/naioti"
                target="_blank"
                rel="external"
                class="connect-social-button">
                <img class="connect-social-icon" src="../assets/images/social-icon-insta.svg" alt="linkedin">
            </a>
            <a href="mailto:naioti@gmail.com"
                target="_blank"
                rel="external"
                class="connect-social-button">
                <img class="connect-social-icon" src="../assets/images/social-icon-email.svg" alt="linkedin">
            </a>
        </div>
    </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import scrollTrigger from 'gsap/dist/ScrollTrigger'

const connectSection = ref<HTMLElement | null>(null)
const contactHeader1 = ref<HTMLElement | null>(null)
const contactHeader2 = ref<HTMLElement | null>(null)

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

    const connectTL = gsap.timeline();
    connectTL.fromTo(contactHeader1.value, {autoAlpha:0, x: '-120px'}, {autoAlpha:1, x: '-60px', duration: 1, ease: 'power3.out'});
    connectTL.fromTo(contactHeader2.value, {autoAlpha:0, x: '120px'}, {autoAlpha:1, x: '60px', duration: 1.25, ease: 'power3.out'}, '<');

    scrollTrigger.create({
        animation: connectTL,
        trigger: connectSection.value, 
        // markers: true,
        start: 'top center',
        end: 'center 12%',
        toggleActions: 'play reverse play reverse'})
}
</script>
<style lang="scss">
.connect-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0 15rem 0;
    width: 100%;
    overflow: hidden;
    @media (min-width: $break-md) {
        padding: 3rem 0 18rem 0;
    }
}
.connect-social-icon {
    height: fluid-calc(14px, 24px);
    width: fluid-calc(14px, 3024px);
}
.connect-social-button {
    padding: 2rem;
    border: none;
    border-radius: 50%;
    height: 32px;
    width: 32px;
    background-color: $color--brand-blue-60;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: fluid-calc(8px, 18px);
    @media (min-width: $break-md) {
        height: fluid-calc(40px, 90px);
        width: fluid-calc(40px, 90px);
    }
}
.connect-social-button:hover {
    background-color: $color--brand-blue-90;
}
.connect-header {
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;
    font-family: 'Monument Extended';
    font-weight: 700;
    letter-spacing: -.03em;
    line-height:1.4;
    color: $color--brand-gray-light;
    font-size: 52px;
    
    width: 100%;
    text-transform: uppercase;
    @media (min-width: $break-md) {
        line-height: 0.9;
        font-size: fluid-calc(60px, 110px);
    }

}
.social-icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.connect-header2 {
    color: $color--brand-yellow;
}
</style>