import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "daniel-i33",
    project: "apple_website"
  }), sentryVitePlugin({
    org: "daniel-i33",
    project: "apple_website"
  }), sentryVitePlugin({
    org: "daniel-i33",
    project: "apple_website"
  })],

  build: {
    sourcemap: true
  }
})