var Person = /** @class */ (function () {
  function Person() {
    this.name = "";
    this.age = 0;
    this.phone = "";
  }
  Person.prototype.doEat = function (who, address) {
    console.log(
      "\u6211\u548C".concat(who, "\u5728").concat(address, "\u5403\u996D")
    );
  };
  return Person;
})(); // 立即执行函数，避免变量名污染
var zhangsan = new Person();
