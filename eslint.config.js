// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const prettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: [".expo/**", "dist/**", "web-build/**", "expo-env.d.ts"],
  },
  prettierRecommended,
]);
