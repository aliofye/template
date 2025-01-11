/**
 * Read: https://vite.dev/config/
 **/

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import mdx from '@mdx-js/rollup';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    envPrefix: 'PUBLIC_WEB',
    plugins: [
      {
        enforce: 'pre',
        ...mdx(),
      },
      react(),
      tsconfigPaths(),
    ],
    define: {
      PUBLIC_WEB_API_URL: JSON.stringify(env.PUBLIC_WEB_API_URL),
    },
    server: {
      port: 5173,
      host: true,
    },
  };
});
