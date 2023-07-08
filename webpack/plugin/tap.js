const { AsyncSeriesBailHook } = require('tapable');

const hook = new AsyncSeriesBailHook(['name']);

hook.tapAsync('Plugin 1', (name, callback) => {
  setTimeout(() => {
    console.log('Plugin 1:', name);
    callback(); // 继续执行下一个钩子
  }, 1000);
});

hook.tapAsync('Plugin 2', (name, callback) => {
  setTimeout(() => {
    console.log('Plugin 2:', name);
    callback(null, 'Result from Plugin 2'); // 返回结果并中止后续钩子的执行
  }, 1000);
});

hook.tapAsync('Plugin 3', (name, callback) => {
  setTimeout(() => {
    console.log('Plugin 3:', name); // 不会被执行
    callback();
  }, 1000);
});

hook.callAsync('John', (error, result) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Final Result:', result);
  }
});
