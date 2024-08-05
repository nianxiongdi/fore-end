type objType1 = {
  username: string;
  age: number;
};

type objType2 = {
  phone: string;
  age: number;
};

let first: objType1 = {
  username: "wangwu",
  age: 23,
};

let second: objType2 = {
  phone: "123",
  age: 13,
};

// 交叉类型
let jiaocha: objType1 & objType2 = {
  username: "drunk",
  age: 12,
  phone: "123",
};

// 联合类型
let union: objType1 | objType2 = {
  username: "drunk",
  age: 2,
};

let union1: objType1 | objType2 = {
  username: "drunk",
  age: 2,
  phone: "123",
};
