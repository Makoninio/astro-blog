// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://merry-praline-acf48e.netlify.app",
  integrations: [preact()]
});