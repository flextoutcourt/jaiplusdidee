import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";
import {pluginAPIRoutes} from "vite-plugin-api-routes"
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    pluginAPIRoutes({
      dirs: [{ dir: "src/api/v1", route: "", exclude: [] }],
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
