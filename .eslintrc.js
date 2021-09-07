/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["react-app", "plugin:prettier/recommended"],
  rules: {
    "no-console": "warn",
    "no-unused-vars": "error",
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
};
