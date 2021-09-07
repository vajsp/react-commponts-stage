/* eslint-disable no-undef */
import { DEFAULT_EXTENSIONS } from "@babel/core";

const path = require("path");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const babel = require("rollup-plugin-babel");
const json = require("rollup-plugin-json");
const postcss = require("rollup-plugin-postcss");
const autoprefixer = require("autoprefixer");
const typescript = require("rollup-plugin-typescript2");

const inputPath = path.resolve(__dirname, "./src/index.ts");
const outEsPath = path.resolve(__dirname, "./lib/mms-ui.es.js");

module.exports = {
  input: inputPath,
  output: [
    {
      file: outEsPath,
      format: "es",
      globals: {
        react: "react",
      },
    },
  ],
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
    }),
    json(),
    postcss({
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["last 2 version", ">1%", "ios 7"],
        }),
      ],
    }),
  ],
  external: ["react", "react-dom", "core-js"],
};
