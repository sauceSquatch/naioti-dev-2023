<template>
    <section class="footer">
        <img src="../assets/images/footer-naioti.svg" class="footer-naioti">
    </section>
</template>
<script>
export default {
    mounted() {
        // this.$gsap.to('#headline', { y:180, duration: 5});
    }
}
</script>
<style>
    .footer {
        position: relative;
        height: 12rem;
        background-color: black;
    }
    .footer-naioti {
        position: absolute;
        right: 0;
        bottom: -3rem;
        width: 80%;
        opacity: 0.1;
        max-width: 50%;
    }
</style>