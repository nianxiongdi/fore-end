


const path = require("path");

module.exports = {
  mode: "development", // 打包模式
  entry: "./src/index.js",
  devtool: false, //不生成source-map

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
