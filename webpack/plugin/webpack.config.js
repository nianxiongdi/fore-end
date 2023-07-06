


const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
const DonePlugin = require('./plugins/DonePlugin')

module.exports = {
  mode: "development", // 打包模式
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolveLoader:{ 
    modules: ['node_modules', path.join(__dirname, 'loaders')] // 查找的目录  先
  },
 
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "./src/index.html",
    //   filename: "index.html",
    // })
    new DonePlugin()
  ],
};
