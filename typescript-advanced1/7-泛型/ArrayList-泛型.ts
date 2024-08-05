// 泛型相当于占位符，传入什么数据类型，就是什么数据类型

// 定义的时候可以不明确数据类型，使用的时候必须明确
class ArrayList<T> {
  public index: number = 0;
  public element: Array<T>;
  // 第一步：定义一个引用属性
  constructor() {
    this.element = [];
  }

  public add(ele: T) {
    if (this.index < 0) {
      throw new Error("数组下标不能小于0");
    }
    this.element[this.index++] = ele;
  }

  // 第二步：根据索引查询数组中指定元素
  get(index: number): T {
    return this.element[index];
  }

  // 第三步：显示方法
  show() {
    this.element.forEach((item) => {
      console.log(item);
    });
  }

  // TS 重载
  remove(value: number): number;
  remove(value: object): object;
  remove(value: any): any {}
}

type StuType = {
  stuname: string;
  age: number;
};

let stuOne = {
  stuname: "zhangsan",
  age: 23,
};

let stuTwo = {
  stuname: "lisu",
  age: 22,
};

let stuThree = {
  stuname: "wangwu",
  age: 21,
};

let arrayList = new ArrayList<object>();
arrayList.add(stuOne);
arrayList.add(stuTwo);
arrayList.add(stuThree);

console.log(arrayList.get(1));

let arrayList1 = new ArrayList<number>();
arrayList1.add(1);

// 错误 类型“string”的参数不能赋给类型“number”的参数。
// arrayList1.add('1')

let arrayList2 = new ArrayList<StuType>();
arrayList2.add(stuOne);

export {};
