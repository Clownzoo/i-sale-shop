const { smart } = require("webpack-merge"); // 引入webpack-merge
const Webpack = require("webpack"); // 引入webpack
const Base = require("./webpack.config.base.js"); // 引入基础配置
module.exports = smart(Base, {
  devServer: {
    port: 8080, // 端口
    progress: true, // 打包进度条开关
    contentBase: "./dist", // 静态服务目录
    open: true, // 打开浏览器开关
    // 配置反向代理
    proxy: {
      "/api": {
        target: "localhost:8000"
      }
    },
  },
  devtool: "source-map", // 1.source-map 2.eval-source-map
  mode: "development", // 开发模式
  plugins: [
    new Webpack.DefinePlugin({
      ENV: JSON.stringify("DEV")
    })
  ]
});