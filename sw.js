const CACHE_NAME = 'jair-cv-v2';
const urlsToCache = [
  '/Blacktechsec_Page/',
  '/Blacktechsec_Page/index.html',
  '/Blacktechsec_Page/styles.css',
  '/Blacktechsec_Page/main.js',
  '/Blacktechsec_Page/manifest.json',
  '/Blacktechsec_Page/img/favicon.png',
  '/Blacktechsec_Page/img/profile.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});