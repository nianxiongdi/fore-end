


const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
const ExternalsWebpackPlugin = require('./plugins/ExternalsWebpackPlugin')

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
  externals:{

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    // new DonePlugin(),
    new ExternalsWebpackPlugin({ jquery:{
        variable:'$',
        url:'https://cdn.bootcss.com/jquery/3.1.0/jquery.js'
      },
      lodash:{
        variable:'_',
        url:'https://cdn.bootcdn.net/ajax/libs/lodash.js/0.1.0/lodash.js'
    }})
  ],
};
