/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
 var promisePool = async function (functions, n) {
  // 使用 Set 存储正在执行的任务队列
  let queue = new Set();
  let resolved = [];

  for (const task of functions) {
      // 将正在执行的任务加入到队列中
      const x = task().then((res) => {
          // 任务执行完成后将结果存到 resolved 数组中
          resolved.push(res);
          // 完成后移出正在执行队列
          queue.delete(x);
      })
      queue.add(x);
      // 控制线程池执行最大数
      if (queue.size >= n) {
          await Promise.race(queue);
      }
  }
  // 执行完所有任务后才返回执行结果
  await Promise.allSettled(queue);
  return resolved;
};
 

var promisePool = async function(functions, n) {
  // await Promise.all([...new Array(n)].map(async () => {
  //     while (functions.length) {
  //         await functions.shift()()
  //     }
  // }))
  Array.from({length: n}).map(async () => {
    while (functions.length) {
        await functions.shift()()
    }
  })
};

 
 const sleep = (t) => new Promise(res => setTimeout(res, t));
 promisePool([() => sleep(500), () => sleep(400)], 1)
   .then(console.log) // After 900ms



