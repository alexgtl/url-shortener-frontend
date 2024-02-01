<template>
  <div class="mt-4 w-full">
    <h2>Here is your shorted url!</h2>
    <div class="relative w-full flex">
      <input
        class="w-full p-2"
        type="text"
        disabled
        v-model="getFullyEncodedUrl"
      />
      <button
        @click="copyToClipboard"
        class="py-3 px-3 bg-green text-white font-bold cursor-pointer outline-0 hover:bg-[#74A385] transition"
      >
        📋
      </button>
    </div>
    <p v-if="isLinkCopied">Your link is now copied in your clipboard!</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
// eslint-disable-next-line no-undef
const config = useRuntimeConfig()

const props = defineProps({
  encodedUrl: String
})

const isLinkCopied: Ref<boolean> = ref(false)
const baseUrl: string = config.public.baseUrl as string
const getFullyEncodedUrl = computed(() => `${baseUrl}/${props.encodedUrl}`)

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(getFullyEncodedUrl.value)
    isLinkCopied.value = true
  } catch (error) {
    console.error('Failed to copy to clipboard: ', error)
  }
}
</script>
