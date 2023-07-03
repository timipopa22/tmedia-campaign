import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';
import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), astroImageTools],
});
