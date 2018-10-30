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
    "revision": "1a8ae8346634a3ebfb425a725dcd1781"
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
    "revision": "6512d40265e5bbb3683eb34ac361a94e"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "9f5914e4e6a2197df557ea53ba481c3b"
  },
  {
    "url": "style.css",
    "revision": "7fa0146b0b82e7685de85c0f6597a290"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
