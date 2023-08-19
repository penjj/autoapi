import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/program.ts', 'src/index.ts', 'src/codegen.ts'],
  format: ['cjs', 'esm'],
  ignoreWatch: ['src/*.test.ts'],
  dts: true,
  clean: true,
})
