// sw.js (limpieza) - si tenías un SW viejo, este limpia cachés.
// Nota: para eliminar completamente el SW en mobile, borrá datos del sitio.
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async ()=>{
    const keys = await caches.keys();
    await Promise.all(keys.map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', (e) => {});