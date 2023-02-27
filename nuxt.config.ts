// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/image-edge',
    ],
    plugins: [
        '~/plugins/gsap.js',
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
    css: ['@/assets/styles/main.scss'],
})
