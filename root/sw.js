VERSION = 'X_VERSION';

importScripts('/environment.sw.js');

const cacheName = environment.cacheName + `-version-${VERSION || 'NO_VERSION'}`;

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

workbox.routing.registerRoute(new RegExp('.*.js'), workbox.strategies.networkFirst());

workbox.routing.registerRoute(
  new RegExp('.*.css'),
  workbox.strategies.staleWhileRevalidate({ cacheName })
);

workbox.routing.registerRoute(
  new RegExp('.*.png'),
  workbox.strategies.staleWhileRevalidate({ cacheName })
);

workbox.routing.registerRoute(
  new RegExp('.*.jpg'),
  workbox.strategies.staleWhileRevalidate({ cacheName })
);

workbox.routing.registerRoute(new RegExp('.*.woff2'), workbox.strategies.cacheFirst({ cacheName }));
