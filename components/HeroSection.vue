<template>
    <section ref="landingHero" id="landing-hero" class="landing-hero-section">
        <div class="hero-profile">
            <nuxt-picture class="logo-naioti" src="/images/logo_naioti.svg"/>
        </div>
        <div class="animated-background">
            <div
                ref="heroLottieGradient"
                class="lottie-full-bg"></div>
            <div
                ref="heroLottieBlueBean"
                class="lottie-bg-item lottie-blue-bean"></div>
            <div
                ref="heroLottieBlue"
                class="lottie-bg-item lottie-blue"></div>
        </div>
    </section>
</template>
<script setup lang="ts">
    // import gsap from 'gsap'
    import lottie from 'lottie-web'

    import lottieBeanBlue from '../assets/animations/landing-blue-circle.json'
    import lottieBeanBlueBean from '../assets/animations/big-bean-blue.json'
    import lottieBeanBrown from '../assets/animations/gradient-bg.json'

    const landingHero = ref<HTMLElement | null>(null)
    const heroLottieBlue = ref<HTMLElement | null>(null)
    const heroLottieBlueBean = ref<HTMLElement | null>(null)
    const heroLottieGradient = ref<HTMLElement | null>(null)
    const lottieObj = lottie
    const isReducedMotion = ref(true)

    onMounted(() => {
        console.log('slide 02 mounted')
        // check for isReducedMotion before setting up animations
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        isReducedMotion.value = mediaQuery.matches
        console.log('slide 02 mounted - isReducedMotion: ', isReducedMotion.value)
        if(!isReducedMotion.value) {
            setupAnimations()
            configureTweens()
        }
    })
    function setupAnimations() {
        // lottie setup
        // ts needs an if otherwise it doesn't trust the ref isn't empty
        if(heroLottieBlue.value) {
            lottieObj.loadAnimation({
            container: heroLottieBlue.value, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: lottieBeanBlue
            })
        }
        if(heroLottieBlueBean.value) {
            lottieObj.loadAnimation({
            container: heroLottieBlueBean.value, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: lottieBeanBlueBean
            })
        }
        if(heroLottieGradient.value) {
            lottieObj.loadAnimation({
            container: heroLottieGradient.value, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: lottieBeanBrown
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
    align-items: center;
    flex-wrap: nowrap;
    aspect-ratio: 16 / 9;
    container: hero-container / size;
    overflow: hidden;

    @media (min-width: $break-sm) {
        aspect-ratio: 16 / 9;
    }

    @media (min-width: $break-lg) {
        aspect-ratio: 16 / 6;
    }
    
}
.hero-profile {
    position: absolute;
    z-index: 333;
}
.animated-background {
    height: 100cqh;
    width: 100cqw;
    position: absolute;
    overflow: hidden;
    background: rgb(89,117,124);
    background: linear-gradient(304deg, rgba(139,166,173,1) 0%, rgba(156,183,190,1) 17%, rgba(206,226,231,1) 84%);
}
.lottie-bg-item {
    position: absolute;
}
.lottie-blue-bean {
    bottom: -40%;
}
.lottie-blue {
    top: 50%;
    left: 8%;
    width: 60cqw;
    height: 60cqh;
}
</style>