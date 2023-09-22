import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      desktop: {
        max: "1460px",
      },
      tablet: {
        max: "960px",
      },
    },
  },
  plugins: [],
};
export default config;
