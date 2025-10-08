export default defineNuxtPlugin((nuxtApp) => {
  const script = document.createElement('script')
  script.src = 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full'
  script.async = true
  script.defer = true
  document.head.appendChild(script)
})