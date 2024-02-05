<template>
  <div class="">
    <ShortenUrlForm
      v-model="encodedUrl"
      ref="formComponent"
    />
    <Transition>
      <ShowEncodedUrl
        class="mt-7"
        v-if="encodedUrl"
        :encodedUrl="encodedUrl"
      />
    </Transition>
    <div>
      <button
        @click="clearFieldsHandler"
        class="bg-accent text-white px-4 py-2 mt-5"
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
