<template>
  <div class="w-dvw min-h-dvh bg-white text-black font-sans">
    <HeaderNav />
    <slot />
    <AppFooter />
  </div>
</template>

<style></style>

<script setup>
useSeoMeta({
  title: 'Url shortener | agutierrez.link',
  ogTitle: 'Url shortener | agutierrez.link',
  description:
    'Welcome to AGutierrez.link - the URL shortener that makes sharing long links a breeze! Shorten your URLs quickly and easily with our simple tool. Built with Nuxt, TypeScript, and Tailwind CSS.',
  ogDescription:
    'Welcome to AGutierrez.link - the URL shortener that makes sharing long links a breeze! Shorten your URLs quickly and easily with our simple tool. Built with Nuxt, TypeScript, and Tailwind CSS.'
})
</script>
