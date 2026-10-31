import { defineConfig } from 'vitest/config';

export default defineConfig({
  define: {
    __SLC_E2E__: 'false',
    __SITE_HOST__: JSON.stringify(''),
  },
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'node',
    testTimeout: 60000,
  },
});
