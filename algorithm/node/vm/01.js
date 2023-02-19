

// var a = 1;

// (function(){

// var a = 2;

// eval("console.log(a)");

// })()

// //输出是2



var b = 1
// global.b=  100
fun = new Function('a', 'console.log(a, b)')('a')
// console.log(fun.toString())