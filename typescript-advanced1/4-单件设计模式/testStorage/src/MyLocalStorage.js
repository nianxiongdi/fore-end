"use strict";

exports.__esModule = true;
var MyLocalStorage = /** @class */ (function () {
  function MyLocalStorage() {}

  MyLocalStorage.getInstance = function () {
    if (this.localStorage) {
      return this.localStorage;
    }
    return new MyLocalStorage();
  };
  // 保存 key-value
  MyLocalStorage.prototype.setItem = function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  };
  MyLocalStorage.prototype.getItem = function (key) {
    var value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };
  return MyLocalStorage;
})();
exports["default"] = MyLocalStorage;
