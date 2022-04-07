import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import { isoImport } from "vite-plugin-iso-import";

const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    target: "#svelte",
    vite: {
      plugins: [isoImport()],
    },
  },
};

export default config;
