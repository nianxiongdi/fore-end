class People {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}
}

class Stu {
  constructor(
    public name: string,
    public age: number,
    public address: string,
    public phone: string,
    public height: number,
    public weight: number
  ) {}
  study() {
    console.log("这是一个学习方法");
  }

  eat() {
    console.log("eat 方法");
  }
}

// 在public属性下，考虑两个类的属性和方法是否相同，或属于包含关系
let people = new People("drunk", 23, "");

// 能获取到Stu类中的属性和方法

// 类型断言
let result = people as Stu;

// 类型转换
let result1 = <Stu>people;

export {};
