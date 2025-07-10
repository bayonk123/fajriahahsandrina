'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d08b9b18e49b4277ddefb0d3b76cf1c9",
"assets/AssetManifest.bin.json": "86aaff93f2f7efa2478a0da78bbc8b40",
"assets/AssetManifest.json": "9ae1bfe899e6bb2c9e529d72e98020b0",
"assets/assets/images/alan_budikusuma.jpg": "d1728e68f6af0150448796ef9afe4855",
"assets/assets/images/arbi888.jpeg": "41d35b1d3eab0a84e38a50fbbc4916ad",
"assets/assets/images/arcsaber11.jpeg": "e8cd342d1384c5d96863804820932364",
"assets/assets/images/astrox99.jpeg": "f2bf32a8f10e7709736b5032236568f1",
"assets/assets/images/grip.jpg": "e9a8934102a495d8cababfcfa6c3c475",
"assets/assets/images/hendra_setiawan.jpg": "59dddd1cfe8fd15c1434e83994a1338f",
"assets/assets/images/jpx_limited.jpeg": "fef3c9f3eea321094bfedf907acb4709",
"assets/assets/images/kevin_sanjaya.jpg": "afd31436f0a6d00fa4b198e8fd6617fd",
"assets/assets/images/marcus_gideon.jpg": "12fc195b8fef868102169523f0e16236",
"assets/assets/images/mohammad_ahsan.jpg": "e5ca384d85c624d039690433210a64c3",
"assets/assets/images/nanoflare700.jpeg": "d57fce29839dfccb6425fe7163ce2709",
"assets/assets/images/net.jpg": "8a1eee35ac438dafd822eea03c8f99c6",
"assets/assets/images/pakaian.jpg": "a3dcac69903c2faaf49af8a4b68c9f33",
"assets/assets/images/powerblade9100.jpeg": "c7b03a93ece67449bc57f8b6aa041b52",
"assets/assets/images/raket.jpg": "6964861c04ea7ba84388b13b7544b34c",
"assets/assets/images/sepatu.jpg": "0ca9d2521fb22d8639227b9b516b5b6f",
"assets/assets/images/shuttlecock.jpg": "13c20fa1ca2262f80d556014d77923ce",
"assets/assets/images/susi_susanti.jpg": "b395d9619c5fd75111975888c74d65c6",
"assets/assets/images/tas.jpg": "bb4df48b8dba2226645e3e0937e03ca8",
"assets/assets/images/taufik_hidayat.jpg": "6aaaf5091a31e69a91873069dc3fd049",
"assets/assets/images/tc75.jpeg": "23da31e3b8e8e5a4bdd3d4498d09a3c0",
"assets/assets/images/tkfalcon.jpeg": "a930675f0fb6d52f750988ccdd34b9c9",
"assets/assets/images/windstorm72.jpeg": "5dcc13406a9fcd874263bfdc560479bd",
"assets/assets/images/ziggler.jpeg": "ecc66d4c5fe8d384549540df4b09d0d4",
"assets/assets/videos/sejarah_raket.mp4": "f421ad8a8be8b2e6ff626b4eee297fa3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "74d0fe26f81d2f60903c3637e45a50f9",
"assets/NOTICES": "d737e10b14db4ca0d83f0b5f13ffe1c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "c7c5e9df63a0690907ea6dae48f1b23a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "63eaeec08ac28ac5ad62618bb7bedacc",
"/": "63eaeec08ac28ac5ad62618bb7bedacc",
"main.dart.js": "970d15def1830610bbc6d35add32411f",
"manifest.json": "0e42c9a103da467603deea4def9be3ad",
"version.json": "4a7fd6938c98d31604f8603a9716b446",
"videos/sejarah_raket.mp4": "f421ad8a8be8b2e6ff626b4eee297fa3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
