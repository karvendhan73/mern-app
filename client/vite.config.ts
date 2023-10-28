/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig, UserConfig } from 'vite';
import pluginRewriteAll from 'vite-plugin-rewrite-all';
import svgrPlugin from 'vite-plugin-svgr';
import type { InlineConfig } from 'vitest';
import { configDefaults } from 'vitest/config';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin(), pluginRewriteAll()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    mockReset: true,
    singleThread: true,
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: [...(configDefaults.coverage.exclude || []), 'src/constants/*', 'src/icons/*'],
    },
  },
  server: {
    port: 3001,
  },
} as VitestConfigExport);
