<template>
  <div class="w-dvw min-h-dvh bg-white text-black">
    <slot />
    <AppFooter />
  </div>
</template>

<script setup>
// Supports weights 100-900
import '@fontsource-variable/montserrat'

// eslint-disable-next-line no-undef
useSeoMeta({
  title: 'Url shortener | agutierrez.link',
  ogTitle: 'Url shortener | agutierrez.link',
  description:
    'Welcome to AGutierrez.link - the URL shortener that makes sharing long links a breeze! Shorten your URLs quickly and easily with our simple tool. Built with Nuxt, TypeScript, and Tailwind CSS.',
  ogDescription:
    'Welcome to AGutierrez.link - the URL shortener that makes sharing long links a breeze! Shorten your URLs quickly and easily with our simple tool. Built with Nuxt, TypeScript, and Tailwind CSS.'
})
</script>
