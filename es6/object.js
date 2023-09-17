

let obj = {
    name: '12'
}

Object.defineProperty(obj, 'age', {
    configurable: true,
    enumerable: false,// 为false 不可枚举 
    writable: true,
    value:  18
})

for (let i in obj) {
    console.log(i); // 0, 1, 2, "foo", "arrCustom", "objCustom"
}
  