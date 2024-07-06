
// empty 不能循环
[1,,,,,].forEach(item => {
  console.log(">>> item", item)
})

console.log('-------');

// empty 不能循环
[1, , , , ,].map(item => {
  console.log(">>> map", item)
})

console.log('-------')
// empty 不能循环
for(let i in [1,,,,,]) {
  console.log(">>> i", i)
}

console.log('-------')
// empty 可以循环
for(let i of [1,,,]) {
  console.log(">>> i", i)
}

console.log('-------')
console.log([1,,,,].length)

// 原始的循环可以的 length没有问题
// for (let i=0; i<5; i++) {
//   console.log(">>>> i", i)
// }
