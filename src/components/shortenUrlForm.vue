<template>
  <form
    action="/"
    class=""
    @submit="onSubmitHandler"
  >
    <div class="flex flex-wrap">
      <input
        class="py-2 px-3 grow shadow-lg border-0 focus:border-green focus:ring-0 focus-visible:border-0"
        type="text"
        placeholder="Place long and boring URL here"
        v-model="urlToShort"
      />
      <button
        class="py-2 px-3 w-40 bg-accent text-white font-bold cursor-pointer outline-0 transition"
        type="submit"
        value=""
        :disabled="isLoading"
        @click="onSubmitHandler"
      >
        <LoaderIcon v-if="isLoading" />
        <span v-else>Shorten the url!</span>
      </button>
    </div>

    <Transition>
      <SimpleModal
        v-if="isModalOpen"
        :message="modalMessage"
      />
    </Transition>
  </form>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'

// eslint-disable-next-line no-undef
const config = useRuntimeConfig()
const baseApiUrl: string = config.public.baseApiUrl as string

const encodedUrl = defineModel()
const urlToShort = ref<string>('')

const isModalOpen: Ref<boolean> = ref(false)
const modalMessage: Ref<string> = ref('')
const isLoading: Ref<boolean> = ref(false)

defineExpose({ urlToShort })

function showModal(message: string, timeout = 5000) {
  modalMessage.value = message
  isModalOpen.value = true

  setTimeout(() => {
    isModalOpen.value = false
    modalMessage.value = ''
  }, timeout)
}

const getEncodedUrl = async (urlToShort: string) => {
  const responseOptions = {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      url: urlToShort
    })
  }

  const response = await fetch(`${baseApiUrl}/encodeUrl`, responseOptions)
  const data = await response.json()
  return data.encodedUrl
}

const onSubmitHandler = async (e: Event) => {
  e.preventDefault()
  isLoading.value = true

  if (!urlToShort.value) {
    return
  }

  encodedUrl.value = await getEncodedUrl(urlToShort.value)
  isLoading.value = false
}
</script>
