self.addEventListener("install", event => {
    const preCache = async () => {
        const cache = await caches.open('obany-web-v1');
        return cache.addAll([
            "/",
            "/index.html",
            "/favicon/",
            "/images/"
        ]);
    };
    event.waitUntil(preCache());
});

self.addEventListener("fetch", async fetchEvent => {
    const res = await caches.match(fetchEvent.request);
    fetchEvent.respondWith(res ?? fetch(fetchEvent.request));
});