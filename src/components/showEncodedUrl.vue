<template>
  <div class="">
    <h2 class="font-semibold mb-2">Here is your shorted url!</h2>
    <div class="relative w-full flex">
      <input
        class="text-gray-500 py-2 px-3 grow shadow-lg border-0 focus:border-green focus:ring-0 focus-visible:border-0"
        type="text"
        disabled
        v-model="getFullyEncodedUrl"
      />
      <button
        @click="copyToClipboard"
        class="py-2 px-3 bg-accent text-white font-bold cursor-pointer outline-0 transition"
      >
        📋
      </button>
    </div>

    <Transition>
      <SimpleModal
        v-if="isLinkCopied"
        :message="modalMessage"
      />
    </Transition>

    <p v-if="isLinkCopied"></p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
// eslint-disable-next-line no-undef
const config = useRuntimeConfig()

const props = defineProps({
  encodedUrl: String
})

const isModalOpen: Ref<boolean> = ref(false)
const modalMessage: Ref<string> = ref('')

const isLinkCopied: Ref<boolean> = ref(false)
const baseUrl: string = config.public.baseUrl as string
const getFullyEncodedUrl = computed(() => `${baseUrl}/${props.encodedUrl}`)

function showModal(message: string, timeout = 5000) {
  modalMessage.value = message
  isModalOpen.value = true

  setTimeout(() => {
    isModalOpen.value = false
    modalMessage.value = ''
  }, timeout)
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(getFullyEncodedUrl.value)
    isLinkCopied.value = true
    showModal('Your link is now copied and ready to use!')
  } catch (error) {
    console.error('Failed to copy to clipboard: ', error)
  }
}
</script>
