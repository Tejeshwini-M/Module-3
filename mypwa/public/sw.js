const mycache = 'my-pwa-cache-v1';
const myfiles = [
  '/',
  '/index.html',  
  "/manifest.json",
  "/favicon.ico",
  "/logo192.png",
  "/logo512.png",
]
  self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(mycache).
      then(cache => {
        return cache.addAll(myfiles);
      })
    );
  })
self.addEventListener('fetch',(event)=>{
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      return response || fetch(event.request);
    })
  );
})

