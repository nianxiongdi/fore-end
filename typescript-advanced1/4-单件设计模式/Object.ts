/**
 * Object类有大量的静态方法，如apply,call,bind,keys
 * Object.keys() 获取给定对象的自身可枚举属性组成的数组
 */

// 把Object构造函数看成Object类

let obj = new Object({
  username: "drunk",
  age: 23,
});

let obj2 = {
  // obj的简写
  username: "drunk",
  age: 23,
};

// 把obj对象变量传递给keys静态方法，obj对象变量作为keys静态方法的参数
let keys = Object.keys(obj2);
console.log(keys); // [ 'username', 'age' ]

export {};
