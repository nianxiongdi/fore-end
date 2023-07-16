const fs = require('fs');

// 读取 wasm 文件的二进制数据
const wasmModule = fs.readFileSync('./test1.wasm');

// 实例化 WebAssembly 模块
WebAssembly.instantiate(wasmModule).then(({ instance }) => {
  // 获取导出的函数
  const fibonacci = instance.exports._Z3fibi;
  let start = Date.now()
//   console.log(start)
  // 调用导出的函数
  const result = fibonacci(100000000); // 计算斐波那契数列的第 10 项
  console.log('Result:', result, Date.now() - start);
}).catch(error => {
  console.error('Error:', error);
});



function fib(n) {
    if (n <= 1) {
      return n;
    }
  
    let prev = 0;
    let current = 1;
  
    for (let i = 2; i <= n; i++) {
      const next = prev + current;
      prev = current;
      current = next;
    }
  
    return current;
  }
  
  let start = Date.now()

  const result = fib(100000000); // 计算斐波那契数列的第 10 项



  console.log(result, Date.now() - start);


  /*

    Infinity 351  - js的计算时间
    Result: 1819143227 66   WebAssembly的计算时间
  
// 用https://mbebenita.github.io/WasmExplorer/ 编译代码
// https://xie.infoq.cn/article/0bb5ff2fa5d5d9db492c88a4c
    */