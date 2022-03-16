if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
        try {
            await navigator.serviceWorker.register("/service-worker.js");
            console.log("service worker registered");
        } catch (err) {
            console.log("service worker not registered", err);
        }
    });
}