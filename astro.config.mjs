import { defineConfig } from "astro/config";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "first-meet" : "",
  integrations: [solidJs()],
});
