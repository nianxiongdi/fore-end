// var b = 1 // error
global.b=  100  // ok
fun = new Function('a', 'console.log(a, b)')('a')
// console.log(fun.toString())