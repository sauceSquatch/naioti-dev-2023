<template>
    <section ref="austinToSpace" class="austin-to-space">
        <div class="austin-container">
            <div class="austin-sky">
                <nuxt-picture src="/images/sky-austin-bg.webp"/>
                <nuxt-picture ref="austinCloud1" class="float-element austin-cloud1" src="/images/cloud1.webp"/>
                <nuxt-picture ref="austinCloud2" class="float-element austin-cloud2" src="/images/cloud2.webp"/>
            </div>
            <div class="city-core">
                <nuxt-picture ref="austinTreeline" class="float-element austin-treeline" src="/images/treeline.webp"/>
                <nuxt-picture class="float-element austin-skyline" src="/images/austin-skyline.webp"/>
            </div>
        </div>
        <div class="earth-stuff">
            <nuxt-picture class="float-element earth-core" src="/images/earth-core.webp"/>
        </div>
        <div class="space-junk">
            <nuxt-picture class="float-element earth-space" src="/images/earth.webp"/>
            <nuxt-picture class="float-element astroid-big1" src="/images/astroid-big.webp"/>
            <nuxt-picture class="float-element astroid-big2" src="/images/astroid-big.webp"/>
            <nuxt-picture class="float-element astroid-med1" src="/images/astroid-med.webp"/>
            <nuxt-picture class="float-element astroid-med2" src="/images/astroid-med.webp"/>
            <nuxt-picture class="float-element astroid-sml1" src="/images/astroid-sml.webp"/>
            <nuxt-picture class="float-element astroid-sml2" src="/images/astroid-sml.webp"/>

            <nuxt-picture src="/images/space-background.webp"/>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const austinToSpace = ref(null);
        const {
            $gsap,
            $ScrollTrigger,

        } = useNuxtApp();
        return {
            gsap: $gsap,
            scrollTrigger: $ScrollTrigger,
            austinToSpace,  
        }
    },
    data() {
        return {
            mainTL: null,
            mainST: null,
        }
    },
    beforeMount() {
        // this.mainTL = this.gsap;
    },
    mounted() {
        this.$nextTick(this.configureTweens);
    },
    methods: {
        configureTweens() {
            console.log('austinToSpace ref width', this.austinToSpace.clientWidth);
            // get percentage of current width vs max supported width
            const widthFactor = this.austinToSpace.clientWidth / 1600;

            this.gsap.set('.city-core', { height: 800 * widthFactor});

            console.log('widthFactor: ', 800 * widthFactor);
            const mainTL = this.gsap.timeline();
            mainTL.fromTo('.austin-cloud1', {y: 555 * widthFactor}, { y: -200 * widthFactor});
            mainTL.fromTo('.austin-cloud2', {y: 450 * widthFactor}, { y: -200 * widthFactor}, '<');
            mainTL.fromTo('.austin-treeline', {y: 620 * widthFactor}, { y: 100}, '<');
            mainTL.fromTo('.austin-skyline', {y: 560 * widthFactor}, { y: 350 * widthFactor}, '<');
            mainTL.fromTo('.earth-core', {y: 120 * widthFactor}, { y: -50 * widthFactor}, '<');
            mainTL.fromTo('.earth-space', {y: -600 * widthFactor}, { y: 0}, '<');
            mainTL.fromTo('.astroid-big1', { y: 1200 * widthFactor, rotation: 90}, { transformOrigin:'25% 25%', y: -200 * widthFactor, rotation: 0}, '<');
            mainTL.fromTo('.astroid-big2', { y: 1800 * widthFactor, rotation: -180}, { transformOrigin:'25% 25%', y: -100 * widthFactor, rotation: 0}, '<');

            const mainST = this.scrollTrigger.create({
                animation: mainTL,
                trigger: '#austin-to-space',
                markers: true,
                scrub: 1.5,
            })
        }
    },
}
</script>

<style lang="scss">
    
    .austin-to-space {
        display: flex;
        flex-direction: column;
    }

    .austin-container {
        background-color: #f0e6da;
        overflow: hidden;
    }

    .austin-sky {
        position: relative;
        padding-top: 50vh;
    }
    .float-element {
        position: absolute;  
        display: block;   
    }
    .austin-cloud1 {
        width: 43rem;
        left: -13rem;
        top: -1rem ;
    }
    .austin-cloud2 {
        width: 38rem;
        right: -9rem;
        top: 5rem;
    }

    .city-core {
        position: relative;
        background-color: #dcbdb2;
        // @include fluid((
        //     height: (140px, 400px),
        // ));
    }

    .austin-skyline {
        @include fluid((
            margin-top: (-10px, -220px),
        ));
    }

    .austin-treeline {
        z-index: 11;
    }
    
    .earth-stuff {
        position: relative;
    }
    .earth-core {
        z-index: 555;
        @include fluid((
            margin-top: (-22px, -220px),
            ));
        }
        

    .space-junk {
        overflow: hidden;
        position: relative;
    }
    .astroid-big1 {
        width: 50%;
        height: 50%;
        top: 45%;
        left: -10%;
    }
    .astroid-big2 {
        width: 65%;
        height: 65%;
        top: 75%;
        right: -8%;
    }
    .astroid-med1 {
        width: 20%;
        height: 20%;
        top: 45%;
        right: 10%;
    }
    .astroid-med2 {
        width: 15%;
        height: 15%;
        top: 75%;
        right: 10%;
    }
    .astroid-sml1 {
        width: 5%;
        height: 5%;
        top: 65%;
        right: 30%;
    }
    .astroid-sml2 {
        width: 5%;
        height: 5%;
        top: 35%;
        left: 30%;
    }

</style>