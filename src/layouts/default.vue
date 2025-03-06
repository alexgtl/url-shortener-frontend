<template>
  <div class="overflow-x-hidden w-dvw min-h-dvh bg-white text-dark flex flex-col justify-between">
    <main class="w-full flex flex-col justify-center">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import '@fontsource-variable/gabarito'

// eslint-disable-next-line no-undef
useSeoMeta({
  title: 'Url shortener | alexgutierrez.link',
  ogTitle: 'Url shortener | alexgutierrez.link',
  description:
    'Welcome to alexgutierrez.link - the URL shortener that makes sharing long links a breeze! Shorten your URLs quickly and easily with our simple tool. Built with Nuxt, TypeScript, and Tailwind CSS.',
  ogDescription:
    'Welcome to alexgutierrez.link - the URL shortener that makes sharing long links a breeze! Shorten your URLs quickly and easily with our simple tool. Built with Nuxt, TypeScript, and Tailwind CSS.'
})
</script>

<style>
.wrapper {
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
}
</style>
