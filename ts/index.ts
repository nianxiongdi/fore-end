let aaa  = '111'

aaa = null
const message = "hello!";
 
// let a  = null

// a = undefined


const getValue = () => {
    return 0
  }
  
  enum List {
    A = getValue(),
    B = 2,  // 此处必须要初始化值，不然编译不通过
    C
  }
  console.log(List.A) // 0
  console.log(List.B) // 2
  console.log(List.C) // 3



var str = '1' 
var str2:number =  str as unknown  as number //str、str2 是 string 类型
console.log(str2)