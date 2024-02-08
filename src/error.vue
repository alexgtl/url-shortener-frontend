<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="w-full h-screen pt-[30dvh] lg:px-[10dvw] flex flex-col items-center text-2xl">
    <h1 class="mb-4 text-4xl font-bold leading-tight pl-4 md:pl-0">
      <h1><strong>Oh no!</strong></h1>

      <p>It looks like something was wrong or we couldn't find this url. Please try again</p>
      <p>
        or generate a new one clicking
        <a
          href="/"
          class="text-accent font-bold"
          >here</a
        >.
      </p>
    </h1>
  </section>
</template>

<script setup>
const error = useError()
</script>
