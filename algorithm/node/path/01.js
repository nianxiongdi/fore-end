


const path = require('path')


// 默认是以process.cwd为工作目录，拼接${process.cwd}/a/b/c
console.log(path.resolve('a', 'b', 'c'));

/*
➜  node pwd
/Users/didi/Desktop/data/yx/algorithm/node
➜  node node ./path/01.js   
/Users/didi/Desktop/data/yx/algorithm/node/a/b/c
*/


// 若想生成文件所在的目录，需要使用__driname
console.log(path.resolve(__dirname, 'a', 'b', 'c'));
// /Users/didi/Desktop/data/yx/algorithm/node/path/a/b/c


// 若存在/ 会回到根目录
console.log(path.resolve(__dirname, 'a', 'b', '/c'));
// /c


console.log(path.resolve('/Users', 'xiaoqiang', 'demo/NodeApi'));
// /Users/xiaoqiang/demo/NodeApi
console.log(path.resolve('/Users', 'xiaoqiang', '/demo/NodeApi'));
// /demo/NodeApi
console.log(path.resolve('xiaoqiang', 'demo/NodeApi'));
// /Users/didi/Desktop/data/yx/algorithm/node/xiaoqiang/demo/NodeApi