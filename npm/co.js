
const co = require('co');


/**
 * co -- 用于 Generator 函数的自动执行。
 *      内部封装操作generator，处理并发的异步操作 - http://es6.ruanyifeng.com/#docs/generator-async
 *      先检查参数gen是否为 Generator 函数。如果是，就执行该函数，得到一个内部指针对象；如果不是就返回，并将 Promise 对象的状态改为resolved。
 * 
 * co官方文档：
 *      https://www.npmjs.com/package/co
 * 
 * Genarator函数：
 *      1. function关键字与函数名之间有一个星号；
 *      2. 函数体内部使用yield表达式
 *  执行： next()
 * 
 * 
 *  使用：  
 *      http://es6.ruanyifeng.com/#docs/generator
 **/ 


const p = co(function* () {
  var res = yield [1, 2, 3]
  var res1 = yield [4, 5, 6]

  console.log(res)
})

console.log(">>> p", p)


/*

co(function* () {
  var res = yield [
    Promise.resolve(1),
    Promise.resolve(2)
  ];
  var res1 = yield [
      Promise.resolve(1),
      Promise.resolve(2)
    ];
  console.log(res);
  console.log(res1);

}).catch(e=>{
    console.log(e)
});
  
  // 对象的写法
co(function* () {
  var res = yield {
    1: Promise.resolve(1),
    2: Promise.resolve(2),
  };
  console.log(res);
}).catch(e=>{
  console.log(e)
});



co(function* () {
    var values = [1, 2, 3];
    a = yield values.map(somethingAsync);
    console.log(a)
    console.log(111)
  });
  
  function* somethingAsync(x) {
    // do something async
    return x
  }
//  上面的代码允许并发三个somethingAsync异步操作，等到它们全部完成，才会进行下一步。


*/