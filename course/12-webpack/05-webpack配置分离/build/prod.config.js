const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin")
const { merge } = require("webpack-merge")
const baseConfig = require("./base.config")
// const { merge } = require("webpack-merge")

module.exports = merge(baseConfig, {
  plugins: [new UglifyjsWebpackPlugin()],
})
