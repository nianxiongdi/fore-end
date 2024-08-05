module.exports = {
  presets: [["@babel/env", {
    useBuiltIns: "usage",
    "corejs": "3.0.0" // Specify the version of core-js you're using
  }]],
  plugins: []
}