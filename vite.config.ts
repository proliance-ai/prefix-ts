import { resolve } from 'path';
import { defineConfig, UserConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { InlineConfig } from 'vitest';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}
export default defineConfig({
  build: {
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'prefix-ts',
      fileName: 'prefix-ts',
      formats: ['es', 'cjs', 'umd'],
    },
  },
  plugins: [dts()],
  test: {

  }
} as VitestConfigExport);
