<template>
    <section ref="landingHero" id="landing-hero" class="landing-hero-section">
        <div class="hero-profile">
            <img class="hero-profile-circle" src="/images/blue-circle.svg" alt="">
            <img class="hero-profile-pic" src="/images/jamie-profile-landing-hero-lrg.webp" alt="">
        </div>
        <div class="animated-background">
            <div
                ref="heroLottieBackBean"
                class="lottie-bg-item lottie-back-bean"></div>
            <div
                ref="heroLottieMidBean"
                class="lottie-bg-item lottie-mid-bean"></div>
            <div
                ref="heroLottieTopBean"
                class="lottie-bg-item lottie-top-bean"></div>
        </div>
    </section>
</template>
<script setup lang="ts">
    // import gsap from 'gsap'
    import lottie from 'lottie-web'

    import lottieBeanTop from '../assets/animations/landing-shape-sml-orange.json'
    import lottieBeanMid from '../assets/animations/landing-shape-med-peach.json'
    import lottieBeanBack from '../assets/animations/landing-shape-lrg-offwhite.json'

    const landingHero = ref<HTMLElement | null>(null)
    const heroLottieBackBean = ref<HTMLElement | null>(null)
    const heroLottieMidBean = ref<HTMLElement | null>(null)
    const heroLottieTopBean = ref<HTMLElement | null>(null)
    const lottieObj = lottie
    const isReducedMotion = ref(true)

    onMounted(() => {
        // check for isReducedMotion before setting up animations
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        isReducedMotion.value = mediaQuery.matches
        console.log('Hero section  | reduced motion value:  ', isReducedMotion.value)
        if(!isReducedMotion.value) {
            setupAnimations()
            configureTweens()
        }
    })
    function setupAnimations() {
        // lottie setup
        // ts needs an if otherwise it doesn't trust the ref isn't empty
        if(heroLottieBackBean.value) {
            lottieObj.loadAnimation({
            container: heroLottieBackBean.value, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: lottieBeanBack
            })
        }
        if(heroLottieMidBean.value) {
            lottieObj.loadAnimation({
            container: heroLottieMidBean.value, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: lottieBeanMid
            })
        }
        if(heroLottieTopBean.value) {
            lottieObj.loadAnimation({
            container: heroLottieTopBean.value, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: lottieBeanTop
            })
        }
    }
    function configureTweens() {
            // get percentage of current width vs max supported width
            // const widthFactor = this.austinToSpace.clientWidth / 1600;

            // this.gsap.set('.city-core', { height: 800 * widthFactor});

            // const mainTL = this.gsap.timeline();
            // mainTL.fromTo('.austin-cloud1', {y: 555 * widthFactor}, { y: -600 * widthFactor});
            // mainTL.fromTo('.austin-cloud2', {y: 450 * widthFactor}, { y: -200 * widthFactor}, '<');
            // mainTL.fromTo('.austin-treeline', {y: 620 * widthFactor}, { y: 150}, '<');
            // mainTL.fromTo('.austin-skyline', {y: 560 * widthFactor}, { y: 350 * widthFactor}, '<');
            // // mainTL.fromTo('.earth-core', {y: 120 * widthFactor}, { y: -50 * widthFactor}, '<');
            // mainTL.fromTo('.earth-space', {y: -600 * widthFactor}, { y: 0}, '<');
            // mainTL.fromTo('.astroid-med1', { y: 2300 * widthFactor, rotation: -220}, { transformOrigin:'25% 25%', y: 200 * widthFactor, rotation: 0}, '<');
            // mainTL.fromTo('.astroid-med2', { y: 1800 * widthFactor, rotation: -170}, { transformOrigin:'25% 25%', y: -200 * widthFactor, rotation: 0}, '<');
            // mainTL.fromTo('.astroid-sml1', { y: 3300 * widthFactor, rotation: -620}, { transformOrigin:'25% 25%', y: -1300 * widthFactor, rotation: 180}, '<');
            // mainTL.fromTo('.astroid-sml2', { y: 3800 * widthFactor, rotation: -170}, { transformOrigin:'25% 25%', y: 1200 * widthFactor, rotation: 0}, '<');

            
            
            // const mainST = this.scrollTrigger.create({
            //     animation: mainTL,
            //     trigger: '#austin-to-space', 
            //     markers: true,
            //     scrub: 1.5,
            // })
    }
</script>
<style scoped lang="scss">
.landing-hero-section {
    position: relative;
    display: flex;
    justify-content: center;
    // align-items: center;
    flex-wrap: nowrap;
    aspect-ratio: 16 / 9;
    container: hero-container / size;
    overflow: hidden;

    @media (min-width: $break-sm) {
        aspect-ratio: 16 / 9;
    }

    @media (min-width: $break-lg) {
        aspect-ratio: 16 / 6;
        width: 80%;
        margin: 0 auto;
    }
}
.hero-profile {
    width: 100cqw;
    height: 100cqh;
    display: flex;
    justify-content: flex-end;
    z-index: 333;
}
.hero-profile-pic {
    position: absolute;
    height: 110%;
    top: 25%;
}
.hero-profile-circle {
    position: absolute;
    bottom: -45%;
    right: 3%;
    height: 90%;
}
.animated-background {
    height: 100cqh;
    width: 100cqw;
    position: absolute;
    overflow: hidden;
    background: #FFFFFF;
    // background: linear-gradient(304deg, rgba(139,166,173,1) 0%, rgba(156,183,190,1) 17%, rgba(206,226,231,1) 84%);
}
.lottie-bg-item {
    position: absolute;
}
.lottie-top-bean {
    bottom: 10%;
    left: 28%;
    width: 15cqw;
}
.lottie-mid-bean {
    bottom: -50%;
    left: 8%;
    width: 45cqw;
}
.lottie-back-bean {
    width: 80cqw;
}
</style>