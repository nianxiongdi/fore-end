



// type isAny<T> = 1 extends 2 & T ? true : false


// type a = isAny<any>

type aa = (2 & unknown) // 2
type bb = (2 & any)  // any

// let a: 1 extends (2 & unknown) ? true : false = true


let a1: unknown extends unknown ? true : false   // true
let a2: unknown extends any ? true : false // true


var str = '1' 
var str2:number = str as number as any   //str、str2 是 string 类型
// var str2: number = str as any as number;
console.log(str2)
