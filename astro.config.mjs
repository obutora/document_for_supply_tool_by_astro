import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx({
    remarkPlugins: [
    ]
  })],
  site: 'https://obutora.github.io',
  base: '/document_for_supply_tool_by_astro'
});