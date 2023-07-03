


const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelLoader = path.join(__dirname, 'loaders/babel-loader')

module.exports = {
  mode: "development", // 打包模式
  // entry: "./src/index.js",
  entry: "./src/file.js",

  devtool: "source-map", //不生成source-map
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolveLoader:{ 
    modules: ['node_modules', path.join(__dirname, 'loaders')] // 查找的目录  先
  },
  module: {
    rules: [ {
      test: /\.js$/,
      use: [{
        // loader: babelLoader, options: {}
        loader: 'babel-loader', options: {
          presets:[
            "@babel/preset-env"
          ],
          sourceMap: true
        }
      }]
    }, {
      // test:/\.(jpg|jpeg|png|gif|bmp)$/,
      // type: 'asset/resource'
      // type: 'asset/inline'
      test:/\.(jsx)$/,
      type: 'asset/source'


    }]
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    })
  ],
};
