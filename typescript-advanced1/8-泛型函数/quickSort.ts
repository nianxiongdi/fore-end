// 泛型函数格式1：函数名<泛型类型>(参数中可以使用泛型类型)：返回值也可以是泛型类型
// 泛型函数格式2：函数名<泛型类型1，泛型类型2>(参数中可以使用泛型类型)：返回值也可以是泛型类型
// 快速排序
export function quickSort<T>(arr: Array<T>): Array<T> {
  let baseValue: T = arr[0];

  let left: Array<T> = [];
  let right: Array<T> = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < baseValue) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  if (left.length >= 2) left = quickSort(left);
  if (right.length >= 2) right = quickSort(right);

  return left.concat(baseValue, right);
}

let arr = [5, 65, 6, 8, 1, 5, 9, 45, 78];

let a = quickSort<number>(arr);
console.log(a);

let arr1: Array<string> = ["a", "c", "b"];
let b = quickSort<string>(arr1);
console.log(b); // [ 'a', 'b', 'c' ]
export {};
