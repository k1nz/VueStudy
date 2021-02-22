const path = require("path")
const webpack = require("webpack")
// webpack.config.js
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    // publicPath: "dist/", // url前面自动拼接
  },
  module: {
    // unknownContextCritical: false,
    rules: [
      {
        test: /\.css$/i,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时，是从右向左加载
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: "url-loader",
            // 当加载的图片，小于limit时，会将图片变编译base64字符串形式
            // 当大于limit时，需要使用file-loader模块进行加载
            // 注意：不需要配置file-loader
            options: {
              limit: 8192,
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
      {
        // 语法转换 es6 -> es5  兼容浏览器
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            // presets: ["@babel/preset-env"],
            presets: ["es2015"],
          },
        },
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
    ],
  },
  resolve: {
    // alias: 别名
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin("最终版权归k1nz所有"),
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    // new UglifyjsWebpackPlugin(),
  ],
  // devServer: {
  //   contentBase: "./dist", // 服务文件夹
  //   inline: true, // 页面实时刷新
  // },
}
