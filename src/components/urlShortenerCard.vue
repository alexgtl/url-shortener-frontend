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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const encodedUrl = ref('')
</script>
