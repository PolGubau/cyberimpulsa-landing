// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import metaTags from "astro-meta-tags";
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: "https://cyberimpulsa.com",
  output: "static",
  trailingSlash: "never",
  prefetch: true,

  experimental: {
    headingIdCompat: true,
    contentIntellisense: true,
  },

  integrations: [
    mdx(),
    sitemap(),
    metaTags(),
  ],

  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeExternalLinks,
        { content: { type: 'text', value: ' 🔗' } }
      ],
    ]
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["astro:content"],
    },
    server: {
      fs: { strict: false },
      watch: {
        usePolling: false,
        ignored: ["**/node_modules/**", "**/.git/**"],
      },
    },
  },

  adapter: vercel(),
});