import {defineConfig} from "vite";

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: ["./index.js"],
      formats: ["es"],
    },
  },
});
