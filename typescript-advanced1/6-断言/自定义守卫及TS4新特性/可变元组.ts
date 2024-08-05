// 可变元组
// let [username, no]: [string, number] = ["zhangsan", 23];

// 可以随意加值
// let [username1, no1]: [string, number, ...any[]] = ["zhangsan", 23];
let [username1, no1, ...rest]: [string, number, ...any[]] = [
  "zhangsan",
  23,
  33,
  "ppp",
];
console.log(rest); // [ 33, 'ppp' ]

// 元组标签
let [username, no]: [name_: string, no: number] = ["zhangsan", 23];

export {};
