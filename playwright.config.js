import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['html']],
  testDir: 'tests',
  use: {
    headless: true,
    baseURL: 'http://localhost:3000', // ajuste se necessário
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
});

