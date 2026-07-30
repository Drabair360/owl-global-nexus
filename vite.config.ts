import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";

/** URL absolue du site (surchargeable via VITE_SITE_URL). */
const SITE_URL = (process.env.VITE_SITE_URL || "https://www.internationalowl.com").replace(/\/+$/, "");

const read = (file: string) => fs.readFileSync(path.resolve(__dirname, file), "utf-8");
const withSite = (file: string) => read(file).split("%SITE_URL%").join(SITE_URL);

/**
 * Injecte SITE_URL dans index.html et génère robots.txt / sitemap.xml
 * depuis les gabarits de seo/ — aucune URL absolue en dur.
 */
const seoUrls = (): Plugin => ({
  name: "owl-seo-urls",
  transformIndexHtml: (html) => html.split("%SITE_URL%").join(SITE_URL),
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === "/robots.txt") {
        res.setHeader("Content-Type", "text/plain");
        return res.end(withSite("seo/robots.template.txt"));
      }
      if (req.url === "/sitemap.xml") {
        res.setHeader("Content-Type", "application/xml");
        return res.end(withSite("seo/sitemap.template.xml"));
      }
      next();
    });
  },
  generateBundle() {
    this.emitFile({ type: "asset", fileName: "robots.txt", source: withSite("seo/robots.template.txt") });
    this.emitFile({ type: "asset", fileName: "sitemap.xml", source: withSite("seo/sitemap.template.xml") });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // AVIF + JPG responsive variants (voir src/assets/textures.ts).
    imagetools({ defaultDirectives: () => new URLSearchParams({ quality: "62" }) }),
    seoUrls(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
