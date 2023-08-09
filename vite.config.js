import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://webdevkelvin.github.io/price-component/",
  server: {
    port: 3000,
  },
});
