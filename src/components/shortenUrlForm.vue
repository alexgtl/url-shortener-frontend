<template>
  <IsLoadingScreen :isLoading="isLoading" />
  <form
    action="/"
    class=""
    @submit="onSubmitHandler"
  >
    <div class="flex flex-wrap items-center relative">
      <img
        src="~/assets/images/icons/chain.svg"
        class="absolute z-10 h-5 left-2 top-3 saturate-50"
        alt="a chain icon"
      />
      <input
        class="url-input py-2 px-3 pl-9 grow border-0 text-dark focus:ring-0 focus-visible:border-0"
        type="text"
        ref="urlInput"
        placeholder="Place long and boring URL here"
        v-model="urlToShort"
      />
    </div>

    <Transition>
      <ShowEncodedUrl
        class="mt-7"
        v-if="encodedUrl"
        :encodedUrl="encodedUrl"
      />
    </Transition>

    <Transition>
      <SimpleModal
        v-if="hasError"
        message="Please, insert a valid URL to short"
      />
    </Transition>

    <div class="flex gap-4 mt-4 justify-center">
      <FormButton
        @clicked="clearFieldsHandler"
        message="Reset field"
        class="saturate-0"
      />

      <FormButton
        @clicked="onSubmitHandler"
        :disabled="isLoading"
        message="Shorten"
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
import FormButton from './formButton.vue'

// eslint-disable-next-line no-undef
const config = useRuntimeConfig()
const baseApiUrl: string = config.public.baseApiUrl as string

const urlInput = ref(null)
const encodedUrl = defineModel<string>()
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
    setTimeout(() => {
      hasError.value = false
    }, 2000)
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
