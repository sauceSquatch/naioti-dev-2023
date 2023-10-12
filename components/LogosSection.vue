<template>
    <section ref="logosSection" id="logos-section">
        <li v-for="item in logosData">
            {{ item.name }}
        </li>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const logosSection = ref<HTMLElement | null>(null)
const logosData =ref([
    { name: 'logo-01', path: 'images/fpo-logo.png' },
    { name: 'logo-10', path: 'images/fpo-logo.png' },
    { name: 'logo-20', path: 'images/fpo-logo.png' },
    { name: 'logo-30', path: 'images/fpo-logo.png' },
    { name: 'logo-40', path: 'images/fpo-logo.png' },
    { name: 'logo-50', path: 'images/fpo-logo.png' },
    { name: 'logo-60', path: 'images/fpo-logo.png' },
    { name: 'logo-70', path: 'images/fpo-logo.png' },
    { name: 'logo-80', path: 'images/fpo-logo.png' },
    { name: 'logo-90', path: 'images/fpo-logo.png' },
    { name: 'logo-100', path: 'images/fpo-logo.png' },
    { name: 'logo-110', path: 'images/fpo-logo.png' },
    { name: 'logo-120', path: 'images/fpo-logo.png' },
    { name: 'logo-130', path: 'images/fpo-logo.png' },
    { name: 'logo-140', path: 'images/fpo-logo.png' },
    { name: 'logo-150', path: 'images/fpo-logo.png' },
    { name: 'logo-160', path: 'images/fpo-logo.png' },
    { name: 'logo-170', path: 'images/fpo-logo.png' },
    { name: 'logo-180', path: 'images/fpo-logo.png' },
    { name: 'logo-190', path: 'images/fpo-logo.png' },
    { name: 'logo-200', path: 'images/fpo-logo.png' },
    { name: 'logo-100', path: 'images/fpo-logo.png' },
    { name: 'logo-210', path: 'images/fpo-logo.png' },
    { name: 'logo-220', path: 'images/fpo-logo.png' },
    { name: 'logo-230', path: 'images/fpo-logo.png' },
    { name: 'logo-240', path: 'images/fpo-logo.png' },
    { name: 'logo-250', path: 'images/fpo-logo.png' },
    { name: 'logo-260', path: 'images/fpo-logo.png' }
])

onMounted(() => {
    console.log(logosSection.value?.clientWidth);
})
</script>