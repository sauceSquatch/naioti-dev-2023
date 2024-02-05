<template>
    <section ref="aboutOverview" class="about-overview" id="aboutoverview">
        <div class="overview-titles global--heading-two">
            <div>UI / UX Prototype</div>
            <div>Motion Design</div>
            <div>Engineer</div>
            <div>Craftsman</div>
            <div>Designer</div>
        </div>
        <p class="overview-content">
            Accomplished design thinking engineer with 20+ years of agency experience concepting, designing, building & animating interactive digital experiences; natural leader who excels at bridging gaps between brand, design and technology teams.
        </p>
    </section>
</template>

<script setup lang='ts' >
import gsap from 'gsap'
import scrollTrigger from 'gsap/dist/ScrollTrigger'
import splitText from 'gsap/dist/SplitText';

const aboutOverview = ref<HTMLElement | null>(null)
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
    
    
    const childSplit = new splitText('.overview-titles', {
        type: 'lines',
        linesClass: 'split-child',
    });
    const parentSplit = new splitText('.overview-titles', {
        type: 'lines',
        linesClass: 'split-parent',
    });

    const mainST = scrollTrigger.create({
        animation: mainTL,
        trigger: '#aboutoverview', 
        markers: true,
        start: 'top bottom',
        end: 'bottom center',
        onEnter: () => {
            gsap.from(childSplit.lines, {
                duration: .75,
                yPercent: 100,
                ease: 'power2.out',
                stagger: 0.1,
                delay: 0.5,
            })
        },
        onLeave: () => {
            gsap.to(childSplit.lines, {
                duration: .5,
                yPercent: 100,
                ease: 'power2.in',
                stagger: 0.05,
            })
        },
        onEnterBack: () => {
            gsap.fromTo(childSplit.lines, {
                duration: 0,
                yPercent: 100,
            }, {
                duration: .75,
                yPercent: 0,
                ease: 'power2.out',
                stagger: 0.1,
                delay: 0.5,
            })
        },
    })

}
</script>

<style lang="scss">
    
    .about-overview {
        display: flex;
        flex-direction: column;
        align-items: center;;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        padding-top: fluid-calc(30px, 120px);
        padding-bottom: fluid-calc(30px, 120px);

        @media (min-width: $break-sm) {
            flex-direction: row;
        }

    }
    .overview-titles { 
        color: $color--brand-blue-light;
        text-align: center;
        display: block;
        // margin-right: fluid-calc(10px, 30px);
        @media (min-width: $break-sm) {
            min-width: 40%;
            text-align: right;
            padding-right: 2rem
        }
        p {
            margin-block-start: 0.2rem;
            margin-block-end: 0.2rem;
        }
    }
    .overview-content {
        max-width: fluid-calc(270px, 400px);
        font-size: fluid-calc(14px, 18px);
        margin-right: 0;
        text-align: center;
        @media (min-width: $break-sm) {
            margin-left: fluid-calc(10px, 30px);
            text-align: left;
            
        }
    }

</style>