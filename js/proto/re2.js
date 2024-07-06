Function.prototype.a = 1;
Object.prototype.b = 2;

function A() {}

var a = new A();

console.log(a.a, a.b);  

console.log(A.a, A.b);  

// undefined    2
 // 1    2

// A.__peoto Function.prototype.__proto__ Object.proto__   
// a.__proto__ A.prptotype    A.prptotype.__proty__ object.procitype

// https://www.nowcoder.com/discuss/353148405981585408?sourceSSR=search