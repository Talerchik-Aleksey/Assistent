import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/users/login": "http://localhost:3001",
      "/users/signup": "http://localhost:3001",
      "/users/user-info": "http://localhost:3001",
    },
  },
  plugins: [react()],
});
