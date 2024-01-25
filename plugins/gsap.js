import { gsap } from 'gsap'
// Nuxt throws an error if Draggable uses import syntax
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText';
import { EasePack } from 'gsap/dist/EasePack'

export default defineNuxtPlugin( (useNuxtApp) => {
  if(process.client) {
    gsap.registerPlugin(ScrollTrigger, EasePack, SplitText)
  }
  return {
    provide: {
      gsap,
      ScrollTrigger,
      EasePack,
      SplitText
    }
  }
})
