<template>
  <div>
    <HeroSection2024 />
    <LazyClientsSection />
    <LazyWorkSection @hasScrolled="workScrolled" />
    <LazyConnectSection v-if="workLoaded" />
  </div>
</template>
<script setup lang="ts">
  let workLoaded = ref(false);
  // listen to work scroll emit as indicator that GSAP pinned section is all loaded can calculated
  function workScrolled( val: boolean ) {
    workLoaded.value = val;
    console.log( 'work scrolled', val );
  }
</script>
