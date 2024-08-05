/*
    请编写一个操作对象方法和属性的函数实现以下功能

    1. 当对象字符串属性有空格时就去掉空格后输出
    2. 当遇到对象函数时就执行，其他数据类型的属性一律直接输出
    3. 只有对象中包含allowoutput属性时，才允许输出
    4. 函数只接收到外部传入的null,undefined,{}时，直接输出不是一个合格的对象

    考核点：1. 类型守卫 2. 静态方法
*/

interface TestInter {
  username: string;
  age: number;
  eat(): void;
  allowoutput: 1;
}

// 工具类
class StringUtil {
  public static trimSpace(str: string): string {
    return str.replace(/ /g, "");
  }
}

let testobj: TestInter = {
  username: "dru nk Cat",
  age: 23,
  eat() {
    console.log(StringUtil.trimSpace(this.username), "正在吃饭");
  },
  allowoutput: 1,
};

function processObjOutput(obj: any) {
  if (obj === undefined || obj === null || JSON.stringify({}) === "{}") {
    console.log("不是一个合格的对象");
    return;
  }
  // 判断某对象中是否有某个属性或方法
  if ("allowoutput" in obj) {
    let value;
    Object.keys(obj).forEach((key) => {
      value = obj[key];
      // 把变量的范围缩小为string
      if (typeof value === "string") {
        // \s代表空格
        console.log(StringUtil.trimSpace(value));
      } else if (typeof value === "function") {
        // value();
        obj[key]();
      } else {
        console.log(key + ":" + value);
      }
    });
  }
}
processObjOutput(null);

export {};
