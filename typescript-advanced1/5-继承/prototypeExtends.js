"use strict";
exports.__esModule = true;
function Parent(name, age) {
    this.name = name;
    this.age = age;
}
Parent.prototype.friends = ['张三', '李四'];
Parent.prototype.eat = function () {
    console.log(this.name + ' 吃饭');
};
function Son(favor, sex) {
    this.favor = favor;
    this.sex = sex;
}
var parent = new Parent('王五', 23);
// 原型继承
Son.prototype = parent;
var son = new Son('打篮球', '男');
console.log(son, son.name);
