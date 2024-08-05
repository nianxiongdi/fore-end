"use strict";
/*
    1. 中文排序
    2. 字符串排序
    3. 中文 + 英文、数字数组排序
    4. 中文 + 英文、数字数组 + 数组内部字符串自排序
    5. 字符串自排序 + 中文 + 英文、数字数组 + 数组内部字符串排序
*/
// exports.__esModule = true;
//  1. 中文排序
function sortChinese(arr) {
  return arr.sort(function (a, b) {
    return a.localeCompare(b, "zh-CN");
  });
}
// 在浏览器控制台才能测试
var chineseArr = ["武汉", "武昌", "郑州", "太原", "济南"];
var a = sortChinese(chineseArr);
console.log(a);
