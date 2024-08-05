type stuType = { stuname: string; age: number; address: string };
let stuOne: stuType = { stuname: "wnagwu", age: 23, address: "beijing" };
let stuTwo: stuType = { stuname: "lisi", age: 39, address: "shanghai" };
let stuThree: stuType = { stuname: "liuqi", age: 31, address: "nanjing" };

// 顾客类
class Customer {
  constructor(public custname: string, public age: number) {}
}

// 顾客类的两个对象
let wangwuCust = new Customer("wangwu", 23); //new Object object
let lisiCust = new Customer("lisi", 23);

function isCustomer(data: any): data is Customer {
  // data 为 any, data后 . 某个属性，不会报错
  // data 类型为object  错误： 类型“object”上不存在属性“custname”。
  return Boolean(data && data.custname);
}

// stuOne 不是 Customer 类
console.log(isCustomer(stuOne)); //false
console.log(isCustomer(stuOne) ? stuOne.custname : undefined); //undefined

console.log(isCustomer(lisiCust)); //true
console.log(isCustomer(lisiCust) ? lisiCust.custname : undefined);

export {};
