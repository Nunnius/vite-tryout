import { defineConfig } from 'vite';
import { resolve } from 'path';
import viteSvgToWebfont from 'vite-svg-2-webfont';

export default defineConfig({
  plugins: [
    viteSvgToWebfont({
      context: resolve(__dirname, 'src/icons'),
  }),
  ],
  build: {
    rollupOptions: {
      input: {
        generall: 'src/generall.ts',
        checkout: 'src/checkout.ts',
      },
      output: {
        dir: 'dist',
        entryFileNames: '[name].js',
        format: 'es',
      },
    },
  },
});
