// sw.js (Service Worker for offline-first PWA, zero dependencies)
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('shroomtop-v1').then(c =>
      c.addAll([
        '.', 'index.html', 'manifest.json'
        // Add any extra static files here (e.g., favicon, LICENSE.txt, etc.)
      ])
    )
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
