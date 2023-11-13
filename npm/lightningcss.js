// import { transform } from 

const { bundle } = require('lightningcss');

// console.log(transform);

// let { code, map } = transform({
//   filename: 'index.css',
//   code: Buffer.from(' '),
//   minify: true,
//   sourceMap: true
// });


// console.log(code.toString());


let { code, map } = bundle({
  filename: 'index.css',
  minify: true
});

console.log(code.toString());