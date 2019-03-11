const { smart } = require("webpack-merge"); // 引入webpack-merge
const Webpack = require("webpack"); // 引入webpack
const Base = require("./webpack.config.base.js"); // 引入基础配置
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // js压缩
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // css压缩
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清除dist文件
const webpack = require("webpack");
module.exports = smart(Base, {
  // 优化项
  optimization: {
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -20,
          chunks: "all"
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true, // 是否缓存
        parallel: true, // 是否并发打包
        sourceMap: true // map源码映射
      }),
      // css优化
      new OptimizeCSSAssetsPlugin(),
    ]
  },
  mode: "production", // 开发模式
  plugins: [
    new Webpack.DefinePlugin({
      ENV: JSON.stringify("PROD")
    }),
    // 打包清除dist,此处需要打包动态链接库,改用rimraf ./dist 作为清除
    // new CleanWebpackPlugin(), 
    // 版权打入
    new webpack.BannerPlugin("make 2019 by 九尘")
  ],
  watch: false, // 打包监听
  watchOptions: {
    poll: 1000, // 多少时间监听一次
    aggregateTimeout: 500, // 防抖
    ignored: /node_modules/
  },
});