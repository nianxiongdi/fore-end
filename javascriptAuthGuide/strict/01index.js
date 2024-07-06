// 是否支持严格模式
var hasStrictMode = (function () {
    "use strict";
    return this == undefined;
}());

console.log(hasStrictMode);  // 输出: true



    