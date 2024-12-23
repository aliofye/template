import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  envPrefix: 'PUBLIC_API',
  plugins: [
    VitePluginNode({
      adapter: 'express',
      appPath: './src/server.ts',
      exportName: 'server',
    }),
  ],
  server: {
    port: 3000,
  },
});
