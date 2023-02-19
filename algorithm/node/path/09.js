


const path = require('path')

console.log(path.parse("/Users/didi/Desktop/data/yx/algorithm/node/path/09.js")) 
/*
{
  root: '/',
  dir: '/Users/didi/Desktop/data/yx/algorithm/node/path',
  base: '09.js',
  ext: '.js',
  name: '09'
}
*/


console.log(path.format({
    root: '/',
    dir: '/Users/didi/Desktop/data/yx/algorithm/node/path',
    base: '09.js',
    ext: '.js',
    name: '09'
  }));
// /Users/didi/Desktop/data/yx/algorithm/node/path/09.js


console.log(path.win32);


console.log(path.join('/Users/xiaoqiang/../work/demo/./app.js'));
// /Users/work/demo/app.js
