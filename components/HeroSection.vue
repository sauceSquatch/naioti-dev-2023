<template>
    <section ref="landingHero" id="landing-hero" class="landing-hero-section">
        <h1 class="hero-headline"><div class="global--heading-one">Hello</div><div class="global--subheading-one">I am Jamie Naioti</div></h1>
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
    import gsap from 'gsap'
    import scrollTrigger from 'gsap/dist/ScrollTrigger'
    import splitText from 'gsap/dist/SplitText';
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
            const widthFactor = landingHero.value ? landingHero.value?.clientWidth / 700 : 0;
            console.log('widthFactor: ', widthFactor);

            // this.gsap.set('.city-core', { height: 800 * widthFactor});

            const mainTL = gsap.timeline();
            mainTL.fromTo('.hero-profile-circle', {y: 150 * widthFactor}, { y: -95 * widthFactor});
            mainTL.fromTo('.hero-profile-pic', {y: -200 * widthFactor}, { y: 50 * widthFactor}, '<');
            mainTL.fromTo('.lottie-back-bean', {y: 100 * widthFactor}, { y: 0}, '<');
            mainTL.fromTo('.lottie-mid-bean', {y: 300 * widthFactor}, { y: 50}, '<');
            mainTL.fromTo('.lottie-top-bean', {y: 300 * widthFactor}, { y: -50}, '<');

            const childSplit = new splitText('h1', {
                type: 'lines',
                linesClass: 'split-child',
            });
            const parentSplit = new splitText('h1', {
                type: 'lines',
                linesClass: 'split-parent',
            });

            const mainST = scrollTrigger.create({
                animation: mainTL,
                trigger: '#landing-hero', 
                // markers: true,
                scrub: 1.25,
                start: "bottom bottom",
                onEnter: () => {
                    gsap.from(childSplit.lines, {
                        duration: 1.25,
                        yPercent: 100,
                        ease: 'power4.out',
                        stagger: 0.1,
                        delay: 0.5,
                    })
                },
                onLeave: () => {
                    gsap.to(childSplit.lines, {
                        duration: .5,
                        yPercent: 100,
                        ease: 'power4.out',
                        stagger: 0.1,
                    })
                },
                onEnterBack: () => {
                    gsap.fromTo(childSplit.lines, {
                        duration: 0,
                        yPercent: 100,
                    }, {
                        duration: 1.25,
                        yPercent: 0,
                        ease: 'power4.out',
                        stagger: 0.1,
                        delay: 0.5,
                    })
                },
            })
    }
</script>
<style scoped lang="scss">
.landing-hero-section {
    position: relative;
    display: flex;
    justify-content: center;
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
    bottom: 0;
    left: 28%;
    width: 15cqw;
}
.lottie-mid-bean {
    bottom: 0;
    left: 8%;
    width: 45cqw;
}
.lottie-back-bean {
    width: 80cqw;
}

.hero-headline {
    position: absolute;

    z-index: 888;
    color: $color--brand-blue-light;
    padding-left: fluid-calc(20px, 160px);
    width: 100%;
}
.global--subheading-one {
    color: $color--brand-brown-dark;
    margin-left: fluid-calc(4px, 10px);
}
</style>