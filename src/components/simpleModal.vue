<template>
  <div
    ref="toasted"
    class="fixed z-10 bottom-4 right-5 flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-white bg-black divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow space-x"
    role="alert"
  >
    <div class="ps-4 text-sm font-normal">{{ props.message }}</div>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup>
const props = defineProps({
  message: String
})
</script>
