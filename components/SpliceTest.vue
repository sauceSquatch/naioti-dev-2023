<template>
    <section>
        <canvas class="spline" ref="spliceCanvas" />
    </section>
</template>
<script setup>
    import { Application } from '@splinetool/runtime';

    const spliceCanvas = ref(null)

    // spline state
    const state = reactive({
        spline: {
            scene: "https://prod.spline.design/837dtnxwhMvWPv6U/scene.splinecode",
            app: null,
            isLoaded: false,
        },
    });

    import gsap from 'gsap'
    // import scrollTrigger from 'gsap/dist/ScrollTrigger'

    onMounted(async () => {
        const app = new Application(spliceCanvas.value);
        await app.load(state.spline.scene)
        const pugHead = app.findObjectByName('PugHead');
        console.log('pugHead', pugHead);
        state.spline.app = app;
        state.spline.isLoaded = true;
        
        // const mainTL = gsap.timeline({repeat: 1111, yoyo:true});
        // mainTL.fromTo(pugHead.scale, {x: 0.5, y: 0.5, z: 0.5}, {x: 1, y: 1, z: 1, duration: 1})
    })
</script>
<style scoped lang="scss">
    .spline {
        width: 100%;
        height: 100%;
    }
</style>