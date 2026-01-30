const CACHE = 'arrived-gh-v1';
const ASSETS = [
  './',
  './index.html',
  './fletero/index.html',
  './panel/index.html',
  './shared/ui.css',
  './shared/utils.global.js',
  './shared/firebase.global.js',
  './shared/firebase-config.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil((async ()=>{
    const cache = await caches.open(CACHE);
    await cache.addAll(ASSETS.map(p => new URL(p, self.registration.scope).toString()));
  })());
  self.skipWaiting();
});

self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  // Cache only same-origin GET
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;

  e.respondWith((async ()=>{
    const cache = await caches.open(CACHE);
    const cached = await cache.match(e.request);
    if (cached) return cached;
    try{
      const res = await fetch(e.request);
      cache.put(e.request, res.clone()).catch(()=>{});
      return res;
    }catch{
      // fallback to cached index if navigation
      if (e.request.mode === 'navigate') {
        const fallback = await cache.match(new URL('./fletero/index.html', self.registration.scope).toString());
        if (fallback) return fallback;
      }
      return cached || new Response('Offline', {status: 503});
    }
  })());
});
