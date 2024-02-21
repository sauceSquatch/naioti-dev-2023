<template>
    <section ref="landingHero" id="landing-hero" class="landing-hero-section">
        <div class="animated-background">
            <canvas class="spline" ref="spliceCanvas" />
            <div
                ref="heroLottieGradient"
                class="lottie-bg-item lottie-back-gradient"></div>
            <div
                ref="heroLottieBackBean"
                class="lottie-bg-item lottie-back-bean"></div>
        </div>
        <h1 class="hero-headline"><div class="hero-heading-one">CREATIVE</div><div class="hero-subheading-one">TECHNOLOGIST</div></h1>
        <div class="hero-about-me">
            <div class="profile-image-container">
                <img ref="profileImage" class="profile-image" src="../assets/images/profile-pic-lrg2x.webp" alt="Profile picture of Jamie Naioti" />
                <img ref="profileImageBg" class="profile-image-bg" src="../assets/images/profile-pic-lrg-bg2x.webp" alt="" />
            </div>
            <div class="profile-text-container">
                <h2>Perpetual prototyper, motion designer, builder, and animator based in Austin, TX</h2>
                <p>Bridging the gap between creative minds and technology teams has always been my forte. Originating as a designer and animator in the industry, my journey evolved alongside the increasing complexity of interactive experiences. Fueled by my curiosity about how things work, I transitioned into a code-driven engineering role. Despite my extensive coding background, my real fulfillment comes from crafting superior user experiences. I aspire to assume the role of a UI/UX Director, partnering with designers to refine interactive experiences using motion prototyping and delivering precise guidance to technology teams.</p>
            </div>
        </div>
    </section>
</template>
<script setup>
    import gsap from 'gsap'
    import scrollTrigger from 'gsap/dist/ScrollTrigger'
    import splitText from 'gsap/dist/SplitText';
    import lottie from 'lottie-web'
    import { Application } from '@splinetool/runtime';
    const spliceCanvas = ref(null)

    import lottieBeanBack from '../assets/animations/landing-shape-lrg-blue.json'
    import lottieBackGradient from '../assets/animations/landing-shape-lrg-blue-gradient.json'

    const landingHero = ref(null)
    const heroLottieBackBean = ref(null)
    const heroLottieGradient = ref(null)
    const profileImage = ref(null)
    const profileImageBg = ref(null)
    const lottieObj = lottie
    const isReducedMotion = ref(true)
    const state = reactive({
        spline: {
            scene: "https://prod.spline.design/9jgEqXfkzmxr4-Ia/scene.splinecode",
            app: null,
            isLoaded: false,
        },
    });
    const splineBlobs = ref(null);
    const mainTL = gsap.timeline();
    const introTL = gsap.timeline();


    onMounted( async() => {
        // setup spline
        const app = new Application(spliceCanvas.value);
        await app.load(state.spline.scene)
        splineBlobs.value = app.findObjectByName('allShapes');
        state.spline.app = app;
        state.spline.isLoaded = true;

        // check for isReducedMotion before setting up animations
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        isReducedMotion.value = mediaQuery.matches
        if(!isReducedMotion.value) {
            setupAnimations()
            revealUI()
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
        if(heroLottieGradient.value) {
            lottieObj.loadAnimation({
            container: heroLottieGradient.value, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: lottieBackGradient
            })
        }
    }
    function revealUI() {
        const childSplit = new splitText('h1', {
            type: 'lines',
            linesClass: 'split-child',
        });
        const parentSplit = new splitText('h1', {
            type: 'lines',
            linesClass: 'split-parent',
        });
        gsap.set(profileImage.value, {y: '2%'})
        gsap.set(heroLottieBackBean.value, {y: 150})
        gsap.set(heroLottieGradient.value, {y: 200})
        introTL.to(landingHero.value, {autoAlpha: 1, duration: 1.5, ease: 'power2.in'})
        introTL.from(childSplit.lines, {
                    duration: 1.25,
                    yPercent: 100,
                    opacity: 0.2,
                    ease: 'power3.inOut',
                    stagger: 0.1,
                })
        introTL.from(profileImage.value, {autoAlpha:0, x: -60, duration: 0.95, ease: 'power3.out'}, '<1')
        introTL.from(profileImageBg.value, {autoAlpha:0, x: -25, duration: 1.15, ease: 'power3.out'}, '<')
        introTL.from('.profile-text-container h2', {autoAlpha: 0, y: 50, duration: 0.95, ease: 'power3.out'}, '<')
        introTL.from('.profile-text-container p', {autoAlpha: 0, y: 40, duration: 0.95, ease: 'power3.out', onComplete:configureTweens()}, '<0.15')
    }
    function configureTweens() {
        // get percentage of current width vs max supported width
        mainTL.to(splineBlobs.value.rotation, {y: -0.3}, '<');
        mainTL.fromTo(profileImage.value, {y: '2%'}, { y: '-40%'}, '<');
        mainTL.fromTo(profileImageBg.value, {y: 0}, { y: -80}, '<');
        mainTL.fromTo(heroLottieBackBean.value, {y: 150}, { y: -100}, '<');
        mainTL.fromTo(heroLottieGradient.value, {y: 200}, { y: -250}, '<');

        const mainST = scrollTrigger.create({
            animation: mainTL,
            trigger: '#landing-hero', 
            // markers: true,
            invalidateOnRefresh: true,

            start: '5% top',
            end: 'bottom 30%',
            scrub: 1.25,
            // onUpdate: self => console.log("progress", self.progress),
        })
    }
</script>
<style scoped lang="scss">
.landing-hero-section {
    position: relative;
    overflow: hidden;
    padding-top: fluid-calc(10px, 30px);
    padding-bottom: fluid-calc(100px, 300px);
    opacity: 0;
}
.animated-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;;
}
.lottie-bg-item {
    position: absolute;
}
.lottie-back-bean {
    width: 80cqw;
    left: -25%;
    top: 25%;;
}

.lottie-back-gradient {
    width: 80cqw;
    right: -45%;
    top: 25%;
}

.background-gradient {
    width: fluid-calc(400px, 800px);
    height: fluid-calc(400px, 800px);
    right: -50%;

    background: rgb(209,214,193);
    background: radial-gradient(circle, rgba(209,214,193,0.65) 0%, rgba(99,159,248,0) 65%);
}

.hero-headline {
    // position: absolute;
    font-family: 'Monument Extended';
    font-weight: 400;
    letter-spacing: -.03em;
    line-height: 0.9;
    z-index: 888;
    color: $color--brand-gray-light;
    font-size: fluid-calc(24px, 100px);
    text-align: center;
    width: 100%;
    margin-bottom: 0;
}
.hero-subheading-one {
    color: $color--brand-yellow;
}
.hero-about-me {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    @media (min-width: $break-md) {
        flex-direction: row;
    }
}

.profile-image-container {
    position: relative;
    top: fluid-calc(40px, 80px);
}
.profile-image {
    position: absolute;
    max-width: 210px;
    top: 50px;
    left: -80px;
    z-index: 777;
    @media (min-width: $break-md) {
        max-width: fluid-calc(230px, 350px);
    }
    
}
.profile-image-bg {
    max-width: 190px;
    @media (min-width: $break-md) {
        max-width: fluid-calc(200px, 300px);
    }
}
.profile-text-container{
    max-width: 80%;
    transform: translateX(0px);
    transform: translateY(50px);
    color: $color--brand-gray-light;
    @media (min-width: $break-sm) {
        max-width: fluid-calc(200px, 480px);
    }
    @media (min-width: $break-md) {
        transform: translateX(100px);
    }
    h2 {
        font-size: fluid-calc(16px, 24px);
        line-height: 1.2;
    }
    p {
        font-size: fluid-calc(10px, 14px);
        line-height: 1.3;
    }
}
</style>