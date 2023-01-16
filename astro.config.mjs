import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), solidJs(), svelte(), vue({
    jsx: true
  }), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), tailwind()],
  output: "server",
  adapter: netlify()
});