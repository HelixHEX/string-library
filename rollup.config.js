import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: packageJson.module,
        format: "cjs",
        sourcemap: false
      },
    ],
    plugins: [
      resolve(),
      terser(),
    ],
  },
];
