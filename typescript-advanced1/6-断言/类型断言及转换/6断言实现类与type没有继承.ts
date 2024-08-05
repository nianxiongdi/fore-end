// 定义 People 接口
type People = {
  username: string;
  age: number;
  address: string;
  phone: string;
};

class Stu {
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
};

// 正确
// 注释掉 Stu 中的phone, 类型“People”缺少类型“Stu”中的以下属性: study, eat，但类型 "Stu" 中需要该属性。
let result = people as Stu;

let stu = new Stu("zhangsan", 23, "hangzhou", "1234");

// 正确
// 注释掉 Stu 中的phone, 类型 "Stu" 中缺少属性 "phone"，但类型 "People" 中需要该属性。
stu as People;

export {};
