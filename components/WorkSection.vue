<template>
    <section ref="workSection" class="work-section" id="work">
        <div class="work-container">
            <h3 class="work-headline">WORK</h3>
            <div ref="workSlides" class="work-slides">
                <WorkSlide v-for="(client, key) in caseStudies.work"
                    :key="client.title"
                    :title="client.title"
                    :description="client.description"
                    :coverImage="client.coverImage"
                    :coverImageAlt="client.coverImageAlt"
                    :slides="client.slides"
                    class="work-slide">
                    {{client.title}}
                </WorkSlide>
            </div>
        </div>
        <div class="work-spacer"></div>
    </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import scrollTrigger from 'gsap/dist/ScrollTrigger'
import caseStudies from '~/content/case-studies.json'

const workSlides = ref<HTMLElement | null>(null)
const workSection = ref<HTMLElement | null>(null)
const isReducedMotion = ref(true)

onMounted(() => {
    configureTweens()
})

onUpdated(() => {
    console.log('updated')
})
function configureTweens() {
    console.log('configuring tweens');
    const slides = gsap.utils.toArray('.work-slide')
    
    const workTL = gsap.timeline();
    workTL.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: 'none',
    })

    scrollTrigger.create({
        trigger: workSection.value,
        animation: workTL,
        scrub: true,
        pin: true,
        snap: 1 / (slides.length - 1),
        markers: true,
        end: () => '+=' + workSlides.value?.offsetWidth,
    });

    console.log('workSlides.value?.offsetWidth: ', workSlides.value?.offsetWidth)

}
</script>

<style lang="scss">
    .work-section {
        padding: 0;
        position: relative;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        container-name: worksection;
        overflow-x: hidden;

        @media (min-width: $break-md) {
            // padding: 3.75rem 0;
        }
    }
    .work-headline {
        position: absolute;
        top: fluid-calc(100px, 200px);
        left: -4rem;
        font-family: 'Monument Extended';
        font-size: fluid-calc(80px, 200px);
        color: $color--brand-blue-60;
        margin: 0;
    }
    .work-container {
        position: relative;
        width: 100%;
        height: 40cqw;
        min-height: 500px;
    }
    .work-spacer {
        height: 20cqh;
        background-color: $color--brand-yellow;
    }
    .work-slides {
        display: flex;
        align-items: center;
        position: absolute;
        top: -6cqh;
        left: 10cqw;
        container-name: slides-container;
    }
    .work-slide {
        width: 50cqw;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (min-width: $break-md) {
            width: 33.333cqw;
        }
    }
</style>