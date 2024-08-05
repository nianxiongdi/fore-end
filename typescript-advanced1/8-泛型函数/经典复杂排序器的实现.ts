/*
    1. 中文排序
    2. 字符串排序 和 字符串自排序
    3. 中文 + 英文、数字数组排序
    4. 中文 + 英文、数字数组 + 数组内部字符串自排序
    5. 字符串自排序 + 中文 + 英文、数字数组 + 数组内部字符串排序
*/
import { quickSort } from "./quickSort";

//  1. 中文排序
function sortChinese<T>(arr: Array<T>): Array<T> {
  return arr.sort((a, b) => (a as any).localeCompare(b, "zh-CN"));
}
// 在浏览器控制台才能测试
let chineseArr = ["武汉", "郑州", "太原", "济南"];
let a = sortChinese<string>(chineseArr);
console.log(a);

// 2. 字符串排序
function sortString<T>(arr: Array<T>): Array<T> {
  return arr.sort((a, b) => (a as any).localeCompare(b));
}
let str = sortString<string>(["ac", "ab", "bc"]);
console.log(str); // [ 'ab', 'ac', 'bc' ]

// 2. 字符串自排序
function strSelfSort(str: string): string {
  let strArray = str.split("");
  let strSortArray = quickSort<string>(strArray);
  return strSortArray.join("");
}
console.log(strSelfSort("cbaimcnd")); // abccdimn

// 中文 + 英文、数字数组排序
function isChinese<T>(arr: Array<T>): boolean {
  let pattern = /[\u4e00-\u9fa5]+/g;
  return arr.some((item: any) => pattern.test(item));
}

function sort<T>(arr: Array<T>): Array<T> {
  if (isChinese(arr)) {
    return sortChinese(arr);
  }
  let newArr: any = arr.map((item) => {
    return typeof item === "string" ? strSelfSort(item) : item;
  });
  return quickSort(newArr);
}

export {};
