<template>
    <h1 id="headline" class="global--heading-one">
      let's see a headline!
    </h1>
</template>
<script>
export default {
    mounted() {
        this.$gsap.to('#headline', { y:180, duration: 5});
    }
}
</script>
<style>
    h1 {
        text-transform: uppercase;
    }
</style>