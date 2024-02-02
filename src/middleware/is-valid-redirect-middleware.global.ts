export default defineNuxtRouteMiddleware(async (to) => {
  const encodedUrl: string = to.path.replace('/', '')
  if (!encodedUrl) {
    return
  }

  const config = useRuntimeConfig()
  const baseApiUrl: string = config.public.baseApiUrl as string

  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  }

  const response = await fetch(`${baseApiUrl}/decodeUrl/${encodedUrl}`, options)
  const { decodedUrl } = await response.json()

  if (decodedUrl) {
    return navigateTo(decodedUrl, { external: true })
  }
})
