class People {
  constructor(protected height: number, protected weight: number) {}
}

class Stu extends People {
  constructor(
    protected name: string,
    protected age: number,
    protected address: string,
    protected phone: string,
    protected height: number,
    protected weight: number
  ) {
    super(height, weight);
  }
  study() {
    console.log("这是一个学习方法");
  }

  eat() {
    console.log("eat 方法");
  }
}

let people = new People(155, 86);

// 能获取到Stu类中的属性和方法

// 类型断言
let result = people as Stu;

// 类型转换
let result1 = <Stu>people;

export {};
