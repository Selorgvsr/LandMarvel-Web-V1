// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    server: {
      proxy: {
        // Lovable CDN assets (.asset.json pointers) are only served by Lovable hosting.
        // When running locally (e.g. cloned from GitHub), proxy them to the Lovable preview
        // so images referenced via /__l5e/assets-v1/... still load.
        "/__l5e": {
          target: "https://id-preview--02bf9fcc-53af-4c0c-b15c-69b822772fb9.lovable.app",
          changeOrigin: true,
          secure: true,
        },
      },
    },
  },
});
