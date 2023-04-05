import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.js"],
    testMatch: ["./src/**/*.test.tsx", "./src/**/*.test.ts"],
    globals: true,
  },
});
