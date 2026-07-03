const CACHE_NAME = "yueyu-v1";
const ASSETS = ["./index.html", "./app.js", "./manifest.json"];
self.addEventListener("install", function(e) {
  e.waitUntil(caches.open(CACHE_NAME).then(function(cache) { return cache.addAll(ASSETS); }));
});
self.addEventListener("fetch", function(e) {
  e.respondWith(caches.match(e.request).then(function(r) { return r || fetch(e.request); }));
});
