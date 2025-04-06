import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { resolve } from "path";
import { fileURLToPath } from "url";
// https://vite.dev/config/
// eslint-disable-next-line no-var
var __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
})
