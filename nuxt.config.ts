// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/image-edge',
        '@nuxtjs/google-fonts'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/shared/global.scss";',
                },
            },
        },
    },
    googleFonts: {
        families: {
        'Archive+Narrow': true,
        }
      }, 
    css: ['@/assets/styles/main.scss'],
})
