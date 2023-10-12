<template>
    <section class="connect">
        <a href="https://www.linkedin.com/in/naioti/">
            <img src="../assets/images/logo-linkedIn-white.svg" class="connect-social-icon">
        </a>
        <a href="https://www.instagram.com/naioti/">
            <img src="../assets/images/logo-instagram-sml.svg" class="connect-social-icon">
        </a>
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
    .connect {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 12rem;
        background-color: white;
    }
    .connect-social-icon {
        width: 4rem;
        padding: 2rem;
    }
</style>