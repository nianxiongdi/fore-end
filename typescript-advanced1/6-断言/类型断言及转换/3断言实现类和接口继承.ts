// 定义 People 接口
interface People {
  username: string;
  age: number;
  address: string;
  phone: string;
  eat: () => string;
}

// Stu 实现 People, Stu 类中必须有 People 接口中定义的属性和方法
class Stu implements People {
  constructor(
    public username: string,
    public age: number,
    public address: string,
    public phone: string
  ) {}

  public study() {
    console.log(this.username, " 正在学习！");
  }

  public eat() {
    return "正在吃...";
  }
}

let people: People = {
  username: "drunk",
  age: 23,
  address: "hangzhou",
  phone: "123",
  eat: () => {
    return "drunk 正在吃东西";
  },
};

// 正确
let result = people as Stu;

let stu = new Stu("zhangsan", 23, "hangzhou", "1234");

// 正确
stu as People;

export {};
