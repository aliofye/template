import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  envPrefix: 'PUBLIC_WEB',
  plugins: [react()],
});
