<template>
  <article class="w-[95dvw] sm:max-w-72 shadow-lg p-4 hover:scale-105 transition">
    <header class="border-b-2 py-8 flex justify-center w-full">
      <img
        :src="getImageUrl()"
        alt=""
      />
    </header>

    <main class="mt-8">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
    </main>
  </article>
</template>

<script setup>
const props = defineProps({
  icon: String,
  title: String,
  text: String
})

const getImageUrl = () => {
  return new URL(`/assets/images/icons/${props.icon}`, import.meta.url)
}
</script>
