/**
 * @fileoverview Configuration file for Vite.
 *
 * This file defines the configuration settings for building and running the application using Vite.
 *
 * @version 1.0.0
 * @date 2025-01-15
 * @author Ali Morshid
 * @see {@link https://vite.dev/config/} Official Vite configuration documentation.
 */

import mdx from '@mdx-js/rollup';
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    envPrefix: 'PUBLIC_WEB',
    plugins: [
      {
        enforce: 'pre',
        // configures .mdx file support
        ...mdx(),
      },
      // configures react support
      reactRouter(),
      // configures typescript path aliases
      tsconfigPaths(),
    ],
    define: {
      PUBLIC_WEB_API_URL: JSON.stringify(env.PUBLIC_WEB_API_URL),
    },
    build: {
      rollupOptions: {
        // excludes test files from the bundle
        external: (id) => /.*\.(test|spec)\..*/.test(id),
      },
    },
    server: {
      port: 5173,
      host: true,
    },
  };
});
