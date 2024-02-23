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
    // commenting out smoother for now, runs slow on mobile, needs optimization
    // ScrollSmoother.create({
    //   smooth:0.7,
    //   effects: true,
    //   smoothTouch: 0.1,
    // } );
  });
  useSeoMeta({
    title: 'Jamie Naioti | Creative Technologist',
    ogTitle: 'Jamie Naioti | Creative Technologist',
    description: 'Jamie Naioti is an accomplished design and UX focused engineer with over 20 years experience concepting, designing, coding and animating digital experiences for some of the best brands in the world.',
    ogDescription: 'Jamie Naioti is an accomplished design and UX focused engineer with over 20 years experience concepting, designing, coding and animating digital experiences for some of the best brands in the world.',
    ogImage: 'https://www.naioti.com/images/naioti-og-image.png',
    ogUrl: 'https://www.naioti.com/',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterImage: 'https://www.naioti.com/images/naioti-og-image.png',
  })
</script>
