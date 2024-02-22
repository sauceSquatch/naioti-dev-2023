import { gsap } from 'gsap'
// Nuxt throws an error if Draggable uses import syntax
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText';
import { EasePack } from 'gsap/dist/EasePack'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'

// Nuxt plugin

export default defineNuxtPlugin( (useNuxtApp) => {
  if(process.client) {
    gsap.registerPlugin(ScrollTrigger, EasePack, SplitText, ScrollSmoother)
  }
  return {
    provide: {
      gsap,
      ScrollTrigger,
      ScrollSmoother,
      EasePack,
      SplitText
    }
  }
})
