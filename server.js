const express = require("express");
const app = express();
const webpack = require("webpack");
// 中间件
const middle = require("webpack-dev-middleware");
const config = require("./webpack.config.js"); // 拿到webpack.confog.js文件
const compiler = webpack(config);

app.use(middle(compiler));

app.get("/api/user", (req, res)=>{
  res.json({
    name: "九尘你好"
  })
});

// 监听在3000端口
app.listen(8000);