<template>
  <div class="w-full p-12 rounded overflow-hidden shadow-lg bg-gray-200">
    <ShortenUrlForm
      v-model="encodedUrl"
      ref="formComponent"
    />

    <ShowEncodedUrl
      v-if="encodedUrl"
      :encodedUrl="encodedUrl"
    />

    <div>
      <button
        @click="clearFieldsHandler"
        class="bg-green text-white px-4 py-2 mt-5 hover:bg-[#74A385]"
      >
        Clear fields
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const encodedUrl = ref('')
const formComponent = ref(null)

const clearFieldsHandler = () => {
  if (!formComponent.value) {
    return
  }
  encodedUrl.value = ''
  formComponent.value.urlToShort = ''
}
</script>
