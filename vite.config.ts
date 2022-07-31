import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import ssr from 'vite-plugin-ssr/plugin';
export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    // @ts-ignore
    polyfillDynamicImport: false,
  },
});
