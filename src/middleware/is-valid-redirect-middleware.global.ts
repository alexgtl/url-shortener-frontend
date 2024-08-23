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
  let { decodedUrl } = await response.json()

  if (response.status === 404 || decodedUrl === 'not-found') {
    return await navigateTo('/')
  }

  if (decodedUrl) {
    const hasProtocol = decodedUrl.startsWith('http://') || decodedUrl.startsWith('https://')
    if (!hasProtocol) {
      decodedUrl = 'http://' + decodedUrl
    }

    return navigateTo(decodedUrl, { external: true })
  }

  return navigateTo(to.path)
})
