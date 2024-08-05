module.exports = {
  presets: [["@babel/env", {
    "shippedProposals": true,
    debug: true,
    loose: false,
    "targets": {
      "chrome": 79,
    }
  }]],
  plugins: [
    // ["@babel/plugin-transform-runtime", {
    //   "corejs": 3
    // }]
  ]
}