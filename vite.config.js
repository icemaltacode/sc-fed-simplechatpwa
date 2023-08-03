import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'favicon-16x16.png', 'favicon-32x32.png'],
      manifest: {
        name: 'SimpleChat Messenger',
        short_name: 'SimpleChat',
        description: 'A simple web messenger built with TanStack Query.',
        theme_color: '#ec26ff',
        icons: [
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
      workbox: {
        runtimeCaching: [{
          urlPattern: ({ url }) => {
            return url.pathname.startsWith('/npm');
          },
          handler: 'CacheFirst',
          options: {
            cacheName: 'npm-cache',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }]
      }
    }),
  ],
});
