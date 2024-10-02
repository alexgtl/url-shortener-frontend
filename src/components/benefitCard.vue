<template>
  <article class="w-[95dvw] sm:max-w-72 shadow-lg p-4 hover:scale-105 transition">
    <header class="border-b-2 py-8 flex justify-center w-full">
      <slot />
    </header>

    <main class="mt-4">
      <h2 class="font-bold uppercase mb-5">{{ title }}</h2>
      <p>{{ text }}</p>
    </main>
  </article>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  text: String
})
</script>
