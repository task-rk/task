const CACHE_NAME = 'amar-bazar-v2';
const urlsToCache = [
  './',
  './index.html',
  'https://mdripon018770-coder.github.io/Notbok/welcome.png',
  'https://mdripon018770-coder.github.io/Notbok/package.png',
  'https://task-rk.github.io/task/towerx.png',
  'https://task-rk.github.io/task/superace.png',
  'https://task-rk.github.io/task/jetx.png',
  'https://task-rk.github.io/task/aviatrix.png',
  'https://task-rk.github.io/task/wildbounty.png',
  'https://task-rk.github.io/task/superelements.png',
  'https://task-rk.github.io/task/royalty.png',
  'https://task-rk.github.io/task/av.png',
  'https://task-rk.github.io/task/foryou.png',
  'https://task-rk.github.io/task/best.png',
  'https://task-rk.github.io/task/lotaris.png',
  'https://task-rk.github.io/task/slot.png',
  'https://task-rk.github.io/task/climb.png',
  'https://task-rk.github.io/task/cardgame.png',
  'https://task-rk.github.io/task/othar.png',
  'https://task-rk.github.io/task/royel.png',
  'https://task-rk.github.io/task/burling.png',
  'https://task-rk.github.io/task/scrt.png',
  'https://task-rk.github.io/task/furtfil.png',
  'https://task-rk.github.io/task/Indiapokar.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
