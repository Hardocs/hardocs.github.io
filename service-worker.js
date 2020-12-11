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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "01-dev-status/01-Getting-started.html",
    "revision": "e5a8828a4cf2e723f1eb262e0858b373"
  },
  {
    "url": "01-dev-status/20_Clive.html",
    "revision": "28c97a4a791f9a49c9e00408f52208ac"
  },
  {
    "url": "01-dev-status/index.html",
    "revision": "b62d4c4d40705a36dbd8f4eed78c0bc6"
  },
  {
    "url": "02-co-creation-report/01-Results.html",
    "revision": "068d39192e96fc8d09c0eca34ca54571"
  },
  {
    "url": "02-co-creation-report/index.html",
    "revision": "79a922459c6a0112bfd01b9f88a5fc7d"
  },
  {
    "url": "03-features-usecases/02-features.html",
    "revision": "5f55c60269332fce6296eaaa98be5db9"
  },
  {
    "url": "03-features-usecases/03-Architecture.html",
    "revision": "9a1ed67d0900c0a06519b9df185589ba"
  },
  {
    "url": "03-features-usecases/index.html",
    "revision": "1bfb477d95ab0143b77519543cf61e13"
  },
  {
    "url": "04-contribute/01-DevTeam.html",
    "revision": "f3c1d373fa23333be31db6875acee72f"
  },
  {
    "url": "04-contribute/index.html",
    "revision": "f22f3b3a50755d2086b5e47489144852"
  },
  {
    "url": "404.html",
    "revision": "10b6cc967f14594120f9854e45f1cfc1"
  },
  {
    "url": "assets/css/0.styles.f0a3b527.css",
    "revision": "7fcf800e842c0427609e7ff3367d65e7"
  },
  {
    "url": "assets/img/hardocs-data-flows.8e01433d.png",
    "revision": "8e01433dcd8b7d195d17d04292d64e4e"
  },
  {
    "url": "assets/img/search.b41d5b62.svg",
    "revision": "b41d5b62cd212377ba4f1d343237e699"
  },
  {
    "url": "assets/js/10.71012592.js",
    "revision": "d83d34eba4009f9656e9ff17e6d59a40"
  },
  {
    "url": "assets/js/11.3495afc9.js",
    "revision": "2dbb92ab0e19d258142b7f346a9e576f"
  },
  {
    "url": "assets/js/12.4f5b7ac3.js",
    "revision": "2a078b9e501a1302fdfe5d3491172d4a"
  },
  {
    "url": "assets/js/13.56c9130a.js",
    "revision": "e38688514ee2bf0b6dceb6fff85ded43"
  },
  {
    "url": "assets/js/14.9b2646cc.js",
    "revision": "3bcda5e03049b60653dfc19d4e4a1b7f"
  },
  {
    "url": "assets/js/15.b79dfc49.js",
    "revision": "37f53077d1f84dfb4e15a6aa6f082ea1"
  },
  {
    "url": "assets/js/16.bff8a05f.js",
    "revision": "cc7e91f81770e8574bf04e6312215d4b"
  },
  {
    "url": "assets/js/17.5e779cfe.js",
    "revision": "992fb268515c0dbe30444c911ed4e905"
  },
  {
    "url": "assets/js/18.c5301a06.js",
    "revision": "4ab40abc01bdb2fa20ed03cf5d3ceb76"
  },
  {
    "url": "assets/js/19.563c4f45.js",
    "revision": "9f3662cd915dea179446c44ee439c04b"
  },
  {
    "url": "assets/js/2.c4dee162.js",
    "revision": "ee25c9b255a2046a8c0fc8a709b33c07"
  },
  {
    "url": "assets/js/20.9031a95d.js",
    "revision": "6081d0c0cec18a0c1a9d28f880805181"
  },
  {
    "url": "assets/js/21.b82143ed.js",
    "revision": "d0d2dd83b1b465e6f9e70cc970bc0ca3"
  },
  {
    "url": "assets/js/3.cb7f8f59.js",
    "revision": "17d20858c4a96d5481548376461004ab"
  },
  {
    "url": "assets/js/4.bedf0743.js",
    "revision": "5e7b37e6e128b881fd8deb2d60346464"
  },
  {
    "url": "assets/js/5.168b20d6.js",
    "revision": "cb40489dc6c5761fbafeeb5235034bd2"
  },
  {
    "url": "assets/js/6.0b23d06f.js",
    "revision": "ac70a96767cfcea326637ffa699874c1"
  },
  {
    "url": "assets/js/7.33ae6be7.js",
    "revision": "60fdb4d4c15c633554286771adc16ed6"
  },
  {
    "url": "assets/js/8.a61aa551.js",
    "revision": "7beedbbb97c177c00bc45663abe1d017"
  },
  {
    "url": "assets/js/9.8efe4fc5.js",
    "revision": "81ef353bf0f512874633199f57cdacdf"
  },
  {
    "url": "assets/js/app.7013cfaf.js",
    "revision": "b454378d56cbd5b768b7ba326a6206dd"
  },
  {
    "url": "blog/20201030-blog1.html",
    "revision": "b089a4187e8af0303ca6e6b55c45e3d8"
  },
  {
    "url": "blog/index.html",
    "revision": "592c971c2770793d227a492df07348e4"
  },
  {
    "url": "content/index.html",
    "revision": "6cc2314a35592794bfb4f8ae0cf8fa1e"
  },
  {
    "url": "delftoh.png",
    "revision": "083230cbd4063c144209823d7a3af66b"
  },
  {
    "url": "EOSC.png",
    "revision": "e25a89199da02a4ff3eca464559f9b13"
  },
  {
    "url": "eoscsecretariat.png",
    "revision": "e79e53138c08266aa4210379eb9a29ea"
  },
  {
    "url": "guide-CreateProject.gif",
    "revision": "558b4be993aeb35ee488eb832e44026f"
  },
  {
    "url": "HARDOCS_files/hardocs-banner.png",
    "revision": "6846e532b8ea5b46f2ddf980cc007c1e"
  },
  {
    "url": "HARDOCS_files/logo.png",
    "revision": "81d15bf4152a8a3cded012398a78a81f"
  },
  {
    "url": "hardocs-banner - Copy.png",
    "revision": "9fd47bc4b059e5d5c103a3a71360bf3a"
  },
  {
    "url": "hardocs-banner.png",
    "revision": "6846e532b8ea5b46f2ddf980cc007c1e"
  },
  {
    "url": "index.html",
    "revision": "993ddac44a237eeda28d0dba04b44996"
  },
  {
    "url": "logo--eu.svg",
    "revision": "30b933ccc0f2663b1c3b73db1884926c"
  },
  {
    "url": "logo.png",
    "revision": "81d15bf4152a8a3cded012398a78a81f"
  },
  {
    "url": "TUD.png",
    "revision": "015d11abef63c5490393be6232041425"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
