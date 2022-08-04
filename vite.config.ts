/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

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
  test: {
    environment: 'jsdom',

    setupFilesAfterEnv: './setup-vitest.ts',
    deps: {
      inline: [/solid-js/, /solid-testing-library/],
    },
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
  },
});
