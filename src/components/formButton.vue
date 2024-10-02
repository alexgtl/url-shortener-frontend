<template>
  <div class="button-wrapper">
    <button
      class="button py-2 px-3 w-40 bg-accent-dark text-white cursor-pointer outline-0 transition"
      type="button"
      value=""
      @click="handleClicked"
    >
      {{ message }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  message: String
})

const emit = defineEmits(['clicked'])

const handleClicked = () => {
  emit('clicked')
}
</script>
