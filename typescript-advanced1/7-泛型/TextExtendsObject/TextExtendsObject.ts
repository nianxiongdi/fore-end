// T 是 object 的子类 或者是 object 本身
class Container<T extends object> {
  t!: T;
  constructor(t: T) {
    this.t = t;
  }
  show(): T {
    console.log(this.t);
    return this.t;
  }
}

let obj2: object = {
  username: "lisi",
  age: 23,
};

type objeType = {
  username: string;
  age: number;
};

let obj: objeType = {
  username: "wangwu",
  age: 23,
};

// 错误 类型“string”不满足约束“object”。
// let c = new Container<string>()

let c = new Container<object>(obj2);
c.show();
let c1 = new Container<objeType>(obj); // objeType 可以具体化 T extends object ， T 是 objeType
c1.show();

export {};
