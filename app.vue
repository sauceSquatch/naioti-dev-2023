<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <HeroSection2024 />
      <LazyClientsSection />
      <LazyWorkSection v-if="workReady" @hasScrolled="workScrolled" />
      <LazyConnectSection v-if="workLoaded" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
  let workLoaded = ref(false);
  let workReady = ref(false);
  // listen to work scroll emit as indicator that GSAP pinned section is all loaded can calculated
  function workScrolled( val: boolean ) {
    workLoaded.value = val;
    console.log( 'work scrolled', val );
  }
  import gsap from 'gsap';
  import ScrollSmoother from 'gsap/dist/ScrollSmoother';
  gsap.registerPlugin( ScrollSmoother );
  
  useSeoMeta({
    robots: 'index, follow',
    ogTitle: 'Jamie Naioti | Creative Technologist',
    description: 'Jamie Naioti is an accomplished design and UX focused engineer with over 20 years experience concepting, designing, coding and animating digital experiences for some of the best brands in the world.',
    ogDescription: 'Jamie Naioti is an accomplished design and UX focused engineer with over 20 years experience concepting, designing, coding and animating digital experiences for some of the best brands in the world.',
    ogImageUrl: 'https://www.naioti.com/images/naioti-og-image.png',
    ogImageAlt: 'Jamie Naioti | Creative Technologist | Naioti.com',
    ogImageType: 'image/png',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    ogUrl: 'https://www.naioti.com/',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterImage: 'https://www.naioti.com/images/naioti-og-image.png',
  })
  onMounted( () => {
    setTimeout( () => {
      workReady.value = true;
    }, 1000 );
  });
</script>
