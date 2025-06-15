self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('zedplus-cache').then(cache => {
      return cache.addAll([
        '/index.html',
        '/about.html',
        '/style.css',
        '/manifest.json',
        '/logo-placeholder.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});