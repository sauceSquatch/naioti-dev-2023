<template>
    <div>
        <div class="slide">
            <div class="slide-content">
                <h4 class="slide-title">{{ title }}</h4>
                <p class="slide-description">{{ description }}</p>
            </div>
            <img :src="'/images/client-slides/' + coverImage"
                :alt="coverImageAlt"
                class="cover-image">
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  coverImage?: string
  coverImageAlt?: string
  description?: string
  slides?: Array<string>
}>()
</script>

<style lang="scss">
    .slide {
        display: flex;
        flex-direction: column-reverse;
        width: 80%;
    }
    .slide-title {
        font-size: fluid-calc(1rem, 2rem);
        margin-bottom: 2rem;
        color: $color--brand-yellow;
        margin-bottom: 0.25rem;
    }
    .slide-description {
        font-size: fluid-calc(0.75rem, 1.5rem);
        color: $color--brand-blue-20;
    }
</style>