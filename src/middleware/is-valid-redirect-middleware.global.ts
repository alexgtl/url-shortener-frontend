export default defineNuxtRouteMiddleware(async (to) => {
  const encodedUrl: string = to.path.replace('/', '')
  if (!encodedUrl) {
    return
  }

  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  }

  const response = await fetch(`http://localhost:3030/api/v1/decodeUrl/${encodedUrl}`, options)
  const { decodedUrl } = await response.json()

  if (decodedUrl) {
    return navigateTo(decodedUrl, { external: true })
  }
})
