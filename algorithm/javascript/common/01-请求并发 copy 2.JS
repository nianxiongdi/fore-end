
/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
 var promisePool = async function (functions, n) {
  //就是以下最多运行n个任务，完成之后，返回一个resolve的promise
  return new Promise((resolve, reject) => {
      if (functions.length == 0) {
          resolve()
          return
      }
      let index = 0  //目前任务的索引
      let num = 0    //完成的任务数量
      function _run() {
          let task = functions[index]
          index++
          task().then(() => {
              num++
              if (num === functions.length) {
                  resolve()
              }
              if (index<functions.length) {
                  _run()  //递归调用，因为维护了index索引，保证可以正确调用到任务
              }
          })
      }
      for (let i = 0; i < functions.length && i < n; i++) {
          _run()
      }
  })

};

/**
* const sleep = (t) => new Promise(res => setTimeout(res, t));
* promisePool([() => sleep(500), () => sleep(400)], 1)
*   .then(console.log) // After 900ms
*/
a