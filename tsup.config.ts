import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['lambda.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
});
