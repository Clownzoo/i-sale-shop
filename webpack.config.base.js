const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // webpack4.0样式抽离
const webpack = require("webpack");
const Happypack = require("happypack");
module.exports = {
  // 入口
  entry: path.resolve(__dirname, "src/index.js"),
  // 出口配置
  output: {
    filename: "bundle.[hash:5].js",
    path: path.resolve(__dirname, "dist")
  },
  // 放置webpack插件,无顺序先后
  plugins: [
    new webpack.IgnorePlugin(/\.\/locale/, /moment/),
    // html模板插件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"), //  html模板地址
      filename: "index.html", // 打包后html名字
      minify: {
        removeAttributeQuotes: true, // 删除属性引号
        collapseWhitespace: true, // 删除空格
        removeComments: true, // 删除注释
        minifyCSS: true, // 压缩行内css
        minifyJS: true, // 压缩html内js
      },
      hash: false, // 添加引入文件hash戳
    }),
    // css模板插件
    new MiniCssExtractPlugin({
      filename: "style/main[hash:5].css", // 打包后css
    }),
    // 查找动态链接库dll
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, "dist/dll", "manifest.json")
    }),
    // js多线程打包配置
    new Happypack({
      id: "js",
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }], // 装饰器
              ["@babel/plugin-proposal-class-properties", { "loose": true }], // 解析es6+语法
              "dynamic-import-webpack"
            ]
          }
        }
      ]
    }),
  ],
  resolve: {
    alias: {
      "router": path.resolve(__dirname, 'src/router'),
      "views": path.resolve(__dirname, 'src/view'),
      "component": path.resolve(__dirname, 'src/component'),
      "assets": path.resolve(__dirname, 'src/assets'),
    }
  },
  // 模块 顺序从右往左,从下往上
  module: {
    noParse: /jquery/,
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve("src"),
        use: "happypack/loader?id=js"
        // use:{
        //   loader: "babel-loader",
        //   options: {
        //     presets: [
        //       "@babel/preset-env",
        //       "@babel/preset-react"
        //     ],
        //     plugins: [
        //       ["@babel/plugin-proposal-decorators", { "legacy": true }], // 装饰器
        //       ["@babel/plugin-proposal-class-properties", { "loose" : true }], // 解析es6+语法
        //       "dynamic-import-webpack"
        //     ]
        //   }
        // }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 200 * 1024,
            outputPath: "/images/"
          }
        }
      }
    ]
  }
}