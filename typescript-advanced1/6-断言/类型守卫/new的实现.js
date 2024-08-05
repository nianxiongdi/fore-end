function Person(phone, age) {
  this.people = phone;
  this.age = age;
  this.showone = function () {};
}

Person.prototype.doEat = function () {
  console.log("电话：", this.phone);
};

let person = new Person("123", 23);

// new 怎么实现的

// 1. 创建一个obj

let obj = {};

// 2. 让新创建的对象__proto__变量指向 Person 原型对象空间

obj.__proto__ = Person.prototype;

// 3. 借用 Person 构造函数中的为 obj 对象变量增加 age 属性和 phone 属性
Person.apply(obj, ["1234", 23]);

console.log(obj);

// export {};
