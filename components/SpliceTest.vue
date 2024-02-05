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

    onMounted(async () => {
        const app = new Application(spliceCanvas.value);
        await app.load(state.spline.scene)
        state.spline.app = app;
        state.spline.isLoaded = true;
        
    })
</script>
<style scoped lang="scss">
    .spline {
        width: 100%;
        height: 100%;
    }
</style>