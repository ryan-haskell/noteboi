importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js')

if (workbox) {
  workbox.precaching.precacheAndRoute([
    { url: '/', revision: '1' },
    { url: '/index.html', revision: '1' },
    { url: '/app.js', revision: '1' },
    { url: '/style.css', revision: '1' },
    { url: '/icons/32.png', revision: '1' },
    { url: '/icons/64.png', revision: '1' },
    { url: '/icons/128.png', revision: '1' }
  ])
  workbox.routing.registerRoute(
    '/', workbox.strategies.staleWhileRevalidate()
  )
}
