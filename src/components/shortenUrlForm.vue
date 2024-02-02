<template>
  <form
    action="/"
    class=""
    @submit="onSubmitHandler"
  >
    <div class="flex w-full flex-wrap">
      <input
        class="py-3 px-3 grow focus:border-green border-0 focus:ring-0 focus-visible:border-0"
        type="text"
        placeholder="Place long and boring URL here"
        v-model="urlToShort"
      />
      <input
        class="py-3 px-3 bg-green text-white font-bold cursor-pointer outline-0 hover:bg-[#74A385] transition"
        type="submit"
        value="Shorten the url!"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// eslint-disable-next-line no-undef
const config = useRuntimeConfig()
const baseApiUrl: string = config.public.baseApiUrl as string

const encodedUrl = defineModel()
const urlToShort = ref<string>('')

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

const onSubmitHandler = async (e: Event) => {
  e.preventDefault()

  if (!urlToShort.value) {
    return
  }

  encodedUrl.value = await getEncodedUrl(urlToShort.value)
}
</script>
