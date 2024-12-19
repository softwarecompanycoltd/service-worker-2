// This file contains the entry point for the application logic. It registers the service worker and handles caching strategies for both HTTP and HTTPS.

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    });
} else {
    console.warn('Service workers are not supported in this browser.');
}