/**
 * Read: https://vite.dev/config/
 **/

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    envPrefix: 'PUBLIC_WEB',
    plugins: [react()],
    define: {
      PUBLIC_WEB_API_URL: JSON.stringify(env.PUBLIC_WEB_API_URL),
    },
    server: {
      port: 5173,
      host: true,
    },
  };
});
