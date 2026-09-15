import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Futura",
      cssVariable: "--futura",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/FuturaLT.woff2"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Bauhaus",
      cssVariable: "--bauhaus",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Bauhaus93Regular.ttf"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
  ],
});
