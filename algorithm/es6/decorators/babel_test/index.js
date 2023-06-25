// 定义一个装饰器函数
function log(target, key, descriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args) {
      console.log(`调用方法 ${key}，参数为: ${JSON.stringify(args)}`);
      return originalMethod.apply(this, args);
    };
  
    return descriptor;
  }
  
  // 定义一个类
  class MyClass {
    @log
    greet(message) {
        debugger
      console.log(`Hello, ${message}!`);
    }
  }
  
  // 创建 MyClass 的实例
  const myObj = new MyClass();
  
  // 调用 greet 方法，会自动触发 log 装饰器
  myObj.greet("World"); // 输出：调用方法 greet，参数为: ["World"]
  