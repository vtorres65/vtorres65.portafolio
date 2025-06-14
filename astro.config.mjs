// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://vtorres65.github.io/vtorres65.portafolio/',
  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [react()]
});
