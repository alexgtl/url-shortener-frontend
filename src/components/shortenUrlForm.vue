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
      <input
        class="py-2 px-3 bg-accent text-white font-bold cursor-pointer outline-0 transition"
        type="submit"
        value="Shorten the url!"
      />
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

  if (!urlToShort.value) {
    return
  }

  const urlRegex: RegExp = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
  const isValidUrl = urlRegex.test(urlToShort.value)
  if (!isValidUrl) {
    showModal('Invalid Url. Try again with another one :)')
    return
  }

  encodedUrl.value = await getEncodedUrl(urlToShort.value)
}
</script>
