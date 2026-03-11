const { getDefaultConfig } = require("expo/metro-config");
const { withUniwindConfig } = require("uniwind/metro");

const config = getDefaultConfig(__dirname);

// your metro modifications

module.exports = withUniwindConfig(config, {
  cssEntryFile: "./global.css",
  // (optional) path where we gonna auto-generate typings
  // dtsFile: "./src/uniwind-types.d.ts",
});
