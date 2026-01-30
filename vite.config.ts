import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "swiper"],
        },
      },
    },
  },
  define: {
    __LAST_UPDATED__: JSON.stringify(new Date().toISOString()),
  },
});
