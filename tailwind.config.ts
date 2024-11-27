import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
       'main-bg' : '#192A32',
        'text' : '#abc1cc',
        'btn-color' : '#1f3540',
        'btn-tifany' : '#31c4be',
        'btn-grey' : '#a8bec9',
        'btn-orange' : '#f2b237',
      }
    },
  },
  plugins: [],
} satisfies Config;
