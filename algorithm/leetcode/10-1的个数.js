

// 方法1
function countOneBits(n) {
    let count = 0;
    while (n !== 0) {
      count += n & 1;
      n >>= 1;
    }
    return count;
  }
  

// 方法2

/*
Brian Kernighan 算法
这种算法是基于 n & (n-1) 的结果可以清除 n 二进制表示中最低位 1 的特性来实现的。
我们可以使用一个循环，每次清除 n 的最低位 1，并将计数器加 1，直到 n 变为 0。
*/
n = 3
let cnt = 0
while(n) {
    n &=n-1
    cnt++
}

console.log(cnt);