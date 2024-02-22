import { defineConfig } from 'wxt';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// See https://wxt.dev/api/config.html
export default defineConfig({
  vite: () => ({
    plugins: [react(), TanStackRouterVite({
      routesDirectory: "entrypoints/newtab/routes",
    })],
  }),
});
