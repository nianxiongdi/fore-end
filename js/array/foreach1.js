



// https://www.cnblogs.com/dreamtt/p/17808107.html
// https://jser.me/2014/04/02/%E5%A6%82%E4%BD%95%E5%9C%A8Array.forEach%E7%9A%84%E5%BE%AA%E7%8E%AF%E9%87%8Cbreak.html
try {
  [1, 2, 3, 4, 5].forEach(val => {
    if (val === 3) {
      // continue error
      // break error
      // return  // 跳出本次循环
      throw new Error(); //结束整体循环
  
    }
    console.log(">>> val", val)
  })
  
} catch (err) {
  console.log(">>> err", err)
}


var a = [11, 2, 3, 4, 5]
a.every(function(item, index, arry) {
    console.log(item); //返回1,2

    if (item === 3) {
      return false
    }


    return true
    // if (item === 2) {
    //     return false
    // } else {
    //     return true
    // }
})



// https://tekloon.medium.com/how-to-skip-loop-in-foreach-best-scenario-using-foreach-2dc7e6586d8f

