const { merge } = require("webpack-merge")
const baseConfig = require("./base.config")
module.exports = merge(baseConfig, {
  devServer: {
    contentBase: "./dist", // 服务文件夹
    inline: true, // 页面实时刷新
  },
})
