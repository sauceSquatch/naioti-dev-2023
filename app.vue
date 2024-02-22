<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <HeroSection2024 />
      <LazyClientsSection />
      <LazyWorkSection @hasScrolled="workScrolled" />
      <LazyConnectSection v-if="workLoaded" />
    </div>
  </div>
</template>
<script setup lang="ts">
  let workLoaded = ref(false);
  // listen to work scroll emit as indicator that GSAP pinned section is all loaded can calculated
  function workScrolled( val: boolean ) {
    workLoaded.value = val;
    console.log( 'work scrolled', val );
  }
  import gsap from 'gsap';
  import ScrollSmoother from 'gsap/dist/ScrollSmoother';
  gsap.registerPlugin( ScrollSmoother );
  
  onMounted( () => {
    console.log( 'mounted: APP', ScrollSmoother );
    ScrollSmoother.create({
      smooth:1,
      effects: true,
      smoothTouch: 0.1,
    } );
  });
</script>
