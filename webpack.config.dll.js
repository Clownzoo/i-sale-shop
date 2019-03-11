const path = require("path");
const webpack = require("webpack");
module.exports = {
  mode: "development",
  entry: {
    vendor: ["react", "react-dom", "react-router-dom", "moment", "mobx", "mobx-react", "lodash"]
  },
  output: {
    filename: "_dll_[name].js",
    path: path.resolve(__dirname, "dist/dll"),
    library: "_dll_[name]"
  },
  plugins: [
    new webpack.DllPlugin({
      name: "_dll_[name]",
      path: path.resolve(__dirname, "dist/dll", "manifest.json")
    })
  ]
}