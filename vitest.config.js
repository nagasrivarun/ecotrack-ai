import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.js'],
    include: ['src/tests/**/*.test.{js,jsx}'],
    coverage: {
      reporter: ['text', 'html'],
      reportsDirectory: 'coverage',
      all: true,
      include: ['src/**/*.{js,jsx}'],
      exclude: ['src/main.jsx', 'src/vite.config.js', 'src/setupTests.js'],
    },
    environmentOptions: {
      jsdom: {
        resources: 'usable',
      },
    },
  },
})
