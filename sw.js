const CACHE_NAME = 'prayerity-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/@alpinejs/collapse@3.x.x/dist/cdn.min.js',
  'https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});