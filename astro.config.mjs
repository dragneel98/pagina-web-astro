// // @ts-check
// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({});

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Your configuration options here
  site: 'https://dragneel98.github.io/pagina-web-astro',
  // Enable static site generation
  base: '/pagina-web-astro/',
  output: 'static',
});