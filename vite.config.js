import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/Bolt-Landing-Restaurante---PROB-ANTIGRAVITY/' : '/',
});
