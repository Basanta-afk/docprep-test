import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#552A7B",
        secondary: "#F1BB00",
        ternary: "#E7E2EC",
        error: "#F1BB00",
        success: "#F1BB00",
        warning: "#F1BB00",
        blue: "#164E99",
        "title-active": "#14142B",
        body: "#4E4B66",
        label: "#6E7191",
        placeholder: "#A0A3BD",
        line: "#D9DBE9",
        "input-bg": "#EFF0F6",
        background: "#F7F7FC",
        "off-white": "#FCFCFC",
      },
    },
  },
  plugins: [],
};
export default config;
