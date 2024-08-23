<template>
  <IsLoadingScreen :isLoading="isLoading" />
  <form
    action="/"
    class=""
    @submit="onSubmitHandler"
  >
    <div class="flex flex-wrap">
      <input
        class="py-2 px-3 grow shadow-lg border-0 text-black focus:ring-0 focus-visible:border-0"
        type="text"
        ref="urlInput"
        placeholder="Place long and boring URL here"
        v-model="urlToShort"
      />
    </div>
    <label
      class="error-message pl-2 mt-6 block text-red-800 absolute"
      v-if="hasError"
      for="error"
    >
      Please, insert a valid URL to short
    </label>
    <div class="flex gap-4 mt-4 w-full justify-end">
      <FormButton
        @clicked="clearFieldsHandler"
        message="Reset field"
      />

      <FormButton
        @clicked="onSubmitHandler"
        :disabled="isLoading"
        message="Short it"
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
import { ref, type Ref, watch } from 'vue'
import FormButton from './formButton.vue'

// eslint-disable-next-line no-undef
const config = useRuntimeConfig()
const baseApiUrl: string = config.public.baseApiUrl as string

const urlInput = ref(null)
const encodedUrl = defineModel()
const urlToShort = ref<string>('')

const isModalOpen: Ref<boolean> = ref(false)
const modalMessage: Ref<string> = ref('')
const isLoading: Ref<boolean> = ref(false)
const hasError: Ref<boolean> = ref(false)

defineExpose({ urlToShort })

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

const onSubmitHandler = async () => {
  hasError.value = false
  if (!urlToShort.value) {
    hasError.value = true
    return
  }

  isLoading.value = true
  getEncodedUrl(urlToShort.value)
    .then((data) => {
      encodedUrl.value = data
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      isLoading.value = false
    })
}

const clearFieldsHandler = () => {
  encodedUrl.value = ''
  urlToShort.value = ''
}
</script>
