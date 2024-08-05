module.exports = {
  presets: [["@babel/env", {
    debug: false,
    "targets": [
      // "chrome 79",
    ]  
  }
  ]],
  plugins: [
    // ["@babel/plugin-transform-runtime", {
    //   "corejs": 3
    // }]
  ]
}