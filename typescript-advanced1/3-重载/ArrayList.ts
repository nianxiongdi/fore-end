// 1. 对现有数组进行封装，让数组增删改变更方便
// 2. 提供get方法 remove方法

class ArrayList {
  constructor(public element: Array<object>) {}

  // 根据索引，查询元素中的指定元素
  get(index: number) {
    return this.element[index];
  }

  // 显示方法
  show() {
    this.element.forEach((ele) => {
      console.log(ele);
    });
  }

  // 删除方法，根据索引删除，返回索引；根据对象删除，返回被删除对象
  remove(value: number): number;
  remove(value: object): object;
  remove(value: number | object): number | object {
    this.element = this.element.filter((ele, index) => {
      if (typeof value === "number") {
        return value !== index;
      } else {
        return value !== ele;
      }
    });
    return value;
  }
}

let students: Array<object> = [
  {
    name: "zhangsan",
    age: 23,
  },
  {
    name: "lisi",
    age: 21,
  },
  {
    name: "wangwu",
    age: 33,
  },
];
let arr = new ArrayList(students);
console.log(arr.show(), arr.get(1));
// let value = arr.remove(0);
// console.log("删除的索引：", value, arr);
let value1 = arr.remove(arr.get(1));
console.log("删除的索引：", value1, arr);
