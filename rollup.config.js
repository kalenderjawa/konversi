import { terser } from "rollup-plugin-terser";

export default {
  input: {
    main: "index.js",
  },
  plugins: [terser()],
  output: [
    {
      dir: "lib",
      format: "iife",
      name: "Konversi",
      entryFileNames: "konversi.min.js",
    },
    {
      dir: "lib",
      format: "cjs",
      entryFileNames: "konversi.min.cjs",
    },
  ],
};
