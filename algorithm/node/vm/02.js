



const vm = require('vm')


// global.a = 1001


// vm.runInThisContext(`console.log(a)`) // 在node中全局变量是在多个模块下共享的, 所以不要通过global来定义属性 


 
const sandbox = { a: 1 };
// 在新的上下文运行
const result = vm.runInNewContext('a = 2' );
console.log(result);// 2
console.log(sandbox);// { a: 2 }


