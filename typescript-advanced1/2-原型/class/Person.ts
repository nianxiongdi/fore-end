// 姓名，年龄，地址，身份证号，手机号

class Person {
  // 类上定义的属性一定是描述这个类本身特征的变量，不能把一些无关的变量放到类属性中
  public name: string = "";
  public age: number = 0;
  public phone: string = "";

  // function 错误，类中定义函数不能使用function

  // 方法默认返回值 void
  public doEat(who: string, address: string): void {
    console.log(`我和${who}在${address}吃饭`);
  }
}

let zhangsan = new Person();
// 给对象赋值的两种方法

// 方法一：通过给类中属性或方法来赋值
zhangsan.age = 23;
zhangsan.doEat("里斯", "王府井");
console.log(zhangsan);

// 方法二:通过构造函数（构造器）来赋值
const person = new Object({ name: "terry" });
console.log(person); // { name: 'terry' }

// 将该文件设置为一个module,避免与其他文件变量名冲突
export default {};
