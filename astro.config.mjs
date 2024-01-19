import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import compress from "astro-compress";

export default defineConfig({
  site: "https://astro.build/",
  output: "server",
  integrations: [
    compress(),
    sitemap(),
    vercel({
      webAnalytics: {
        enabled: true,
      },
    }),
  ],
});
