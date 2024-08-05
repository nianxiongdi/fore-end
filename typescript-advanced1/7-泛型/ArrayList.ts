// 对现有数据进行封装，让数组增删改变的更加好用

class ArrayList {
  public index: number = 0;
  public element: Array<object>;
  // 第一步：定义一个引用属性
  constructor() {
    this.element = [];
  }

  public add(ele: object) {
    if (this.index < 0) {
      throw new Error("数组下标不能小于0");
    }
    this.element[this.index++] = ele;
  }

  // 第二步：根据索引查询数组中指定元素
  get(index: number): object {
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

let arrayList = new ArrayList();
arrayList.add(stuOne);
arrayList.add(stuTwo);
arrayList.add(stuThree);

console.log(arrayList.get(1));

export {};
