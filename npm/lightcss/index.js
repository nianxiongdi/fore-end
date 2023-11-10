const { bundle } = require('lightningcss')




let { code, map } = bundle({
  filename: 'index.css',
  minify: true
});

console.log(code.toString())
