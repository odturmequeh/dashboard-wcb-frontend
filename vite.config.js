import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  base: "/dashboard-wcb-frontend/",

  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000", // 👈 BACKEND
        changeOrigin: true,
        secure: false,
      },
    },
  },

  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
  },
});