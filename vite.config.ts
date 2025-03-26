import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    allowedHosts: true,
  },
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: "vite-project",
        short_name: "vite",
        description: "vite-project",
        theme_color: "#ffffff",
        display: "standalone",
        prefer_related_applications: false,
        screenshots: [
          {
            src: "test.png",
            sizes: "320x640",
            type: "image/png",
            form_factor: "narrow",
            label: "ME",
          },
          {
            src: "test.png",
            sizes: "320x640",
            type: "image/png",
            form_factor: "narrow",
            label: "ME",
          },
          {
            src: "test.png",
            sizes: "320x640",
            type: "image/png",
            form_factor: "narrow",
            label: "ME",
          },
          {
            src: "test2.png",
            sizes: "1024x593",
            type: "image/png",
            form_factor: "wide",
            label: "ME",
          },
        ],
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: true,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
});
