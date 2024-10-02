<template>
  <div class="min-w-[70%]">
    <ShortenUrlForm
      v-model="encodedUrl"
      ref="formComponent"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const encodedUrl = ref('')
</script>
