import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    open: true,
    cors: true,
    host: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    minify: "terser",
    target: "es2015",
  },
});
