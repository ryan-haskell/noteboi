/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "app.js",
    "revision": "5c810989c172cd7537865adbaefe2eef"
  },
  {
    "url": "icons/128.png",
    "revision": "fa5e4f9065cef851f47fd901ffc1f07d"
  },
  {
    "url": "icons/32.png",
    "revision": "d9230715830ed50e785d01508df2dd79"
  },
  {
    "url": "icons/64.png",
    "revision": "17d8bc2adc03e8e374daf1e897be6d56"
  },
  {
    "url": "index.html",
    "revision": "1794a84d8dd62db580810a02c69264a4"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8a7afbb5ae198790b719f361d7e8e883"
  },
  {
    "url": "style.css",
    "revision": "30c9b93ffbfe8225a1e0847a64bf8848"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
