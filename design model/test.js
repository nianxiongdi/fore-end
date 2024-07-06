// (function(){
//     console.log(`向媳妇申请1块钱.`);
// }).(function(){
//     console.log(`把剩下的2毛钱还给媳妇.`);
// })()


// 异步加法
function asyncAdd(a,b,cb){
    setTimeout(()=>{
      cb(null,a+b)
    },Math.random()*1000)
  }
  async function total(){
    const res1=await sum(1,2,3,4,5,6,4)
    const res2=await sum(1,2,3,4,5,6,4)
    return [res1,res2]
  }
console.log(  total());
  // 实现下sum函数。注意不能使用加法，在sum中借助asyncAdd完成加法。尽可能的优化这个方法的时间。
  function sum(...arr){
   return new Promise((resolve) => {
        const cb = (i, sum=0) => {
            asyncAdd(sum, arr[i], (obj, sum) => {
                console.log(i< arr.length-1, sum)
                if (i< arr.length-1) {
                    cb(i+1, sum)
                }else {
                    resolve(sum)
                }
            })
        }
        let i = 0
        cb(i)
   })
  }
  


  // 异步加法
function asyncAdd(a, b, cb) {
    setTimeout(() => {
      cb(null, a + b);
    }, Math.random() * 1000);
  }
  
  // 异步求和
  async function sum(...args) {
    const promises = [];
    let total = 0;
  
    // 并行地进行异步加法计算
    for (let i = 0; i < args.length; i += 2) {
      const a = args[i];
      const b = args[i + 1] || 0; // 如果参数个数为奇数，将最后一个参数视为 0
      const promise = new Promise((resolve, reject) => {
        asyncAdd(a, b, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
      promises.push(promise);
    }
  
    // 等待所有加法完成并求和
    const results = await Promise.all(promises);
    for (const result of results) {
      total += result;
    }
  
    return total;
  }
  
  async function total() {
    const res1 = await sum(1, 2, 3, 4, 5, 6, 4);
    const res2 = await sum(1, 2, 3, 4, 5, 6, 4);
    return [res1, res2];
  }
  
  total().then(console.log).catch(console.error);
  