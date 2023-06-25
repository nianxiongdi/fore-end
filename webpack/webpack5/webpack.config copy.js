


const path = require("path");

module.exports = {
  mode: "development", // 打包模式
  entry: {
    "login": "./src/login",
    "index": "./src/index"
  },
  devtool: false, //不生成source-map

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
};
