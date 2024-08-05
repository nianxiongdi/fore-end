const arr = [1, 2, 3, "a"];

// 错误 无法分配到 "arr" ，因为它是常数。
// arr = [1,2]
arr[0] = 2;

// 使用const定义的数组，不能修改该变量的指针，但能修改引用数据里面的某个值

// 如何处理，避免修改引用数据里面的某个值
const arr1 = [1, 2, 3] as const;

// 错误 无法分配到 "0" ，因为它是只读属性。
// arr1[0] = 2

// readonly 参数只读
/* 
    不加 readonly 报错
    类型“readonly [1, 2, 3]”的参数不能赋给类型“any[]”的参数。
    类型 "readonly [1, 2, 3]" 为 "readonly"，不能分配给可变类型 "any[]"。
*/
function showArr(arr: readonly any[]) {
  console.log(arr);
}

showArr(arr1);
export {};
