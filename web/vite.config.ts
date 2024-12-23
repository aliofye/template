/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
// https://vitest.dev/config/
export default defineConfig({
  envPrefix: 'PUBLIC_WEB',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
    },
  },
});
