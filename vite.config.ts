import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA({
    registerType: "autoUpdate",
    workbox: {
      maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 5MB
      cleanupOutdatedCaches: true,
    },
    manifest: {
        name: "CALI AI PT",
        start_url: "/",
        short_name: "CALI AI PT",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#000000",
        icons: [
          {
            src: "ios/16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "ios/20.png",
            sizes: "20x20",
            type: "image/png",
          },
          {
            src: "ios/29.png",
            sizes: "29x29",
            type: "image/png",
          },
          {
            src: "ios/32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "ios/40.png",
            sizes: "40x40",
            type: "image/png",
          },
          {
            src: "ios/50.png",
            sizes: "50x50",
            type: "image/png",
          },
          {
            src: "ios/57.png",
            sizes: "57x57",
            type: "image/png",
          },
          {
            src: "ios/60.png",
            sizes: "60x60",
            type: "image/png",
          },
          {
            src: "ios/72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "ios/76.png",
            sizes: "76x76",
            type: "image/png",
          },
          {
            src: "ios/96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "ios/120.png",
            sizes: "120x120",
            type: "image/png",
          },
          {
            src: "ios/144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "ios/152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "ios/167.png",
            sizes: "167x167",
            type: "image/png",
          },
          {
            src: "ios/180.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "ios/192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "ios/256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "ios/384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "ios/512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "ios/1024.png",
            sizes: "1024x1024",
            type: "image/png",
          },
          {
            src: "android/android-launchericon-512-512.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "android/android-launchericon-512-512.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "android/android-launchericon-512-512.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "android/android-launchericon-512-512.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "android/android-launchericon-512-512.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android/android-launchericon-512-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    BUILD_DATE: JSON.stringify(new Date().toString()),
  }
})