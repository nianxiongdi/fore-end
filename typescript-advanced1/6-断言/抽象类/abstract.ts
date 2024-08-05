abstract class People {
  public name: string;

  // 抽象方法
  public abstract eat(): void;

  // 具体方法
  public step() {
    console.log("双腿走路");
  }
}

// 错误 无法创建抽象类的实例
// let people1 = new People();

// 美国人
class AmericanPeople extends People {
  public phone: string;

  public eat(): void {
    console.log("用叉子吃饭...");
  }
}

// 中国人
class ChinesePeople extends People {
  public eat(): void {
    console.log("用筷子吃饭");
  }
}

// 土族人
class TuzuPeople extends People {
  public eat(): void {
    console.log("用手抓饭吃...");
  }
}

// 父类的对象变量 people 可以接受任何一个子类的对象
// 例如，可以接受 AmericanPeople ChinesePeople TuzuPeople 子类对象
let people: People = new AmericanPeople();
// 从而用这个父类的对象变量来调用子类中的重写方法而输出不同的结果
// eat 方法重写
people.eat(); // 用叉子吃饭...
people = new ChinesePeople();
people.eat(); // 用筷子吃饭
people = new TuzuPeople();
people.eat(); // 用手抓饭吃...

export {};
