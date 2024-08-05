// 函数类型
type promiseFuncType = (resolve: string, reject: string) => any;
// promiseFuncType 表示一种函数类型 promiseFunc 是 promiseFuncType 函数类型的变量
let promiseFunc: promiseFuncType = function (resolve, reject): void {
  console.log(resolve);
};
promiseFunc("success", "fail");

class Promise {
  constructor(promiseFunc2: promiseFuncType) {
    promiseFunc2("success", "fail");
  }
}
let promise = new Promise(promiseFunc);

// 通用函数类型
type commonFunc = (...args: any) => any;
// 等价于
// interface commonFuncInter {
//   (...args: any): any;
// }

let func: commonFunc = function (count: string, money: number): void {};

// 工厂函数类型 代表所有类【等价 JS 的构造函数】的函数类型
type CommonBankType = new (...args: any) => CommonBankType;
// 通用类
type ConstructorType = new (...args: any) => any;

// 3.泛型工厂函数

class CommercialBank {
  public address: string = "beijing";
  public name: string = "wangwu";
  static count: number;

  constructor(name: string, address: string) {
    // 日志文件 哪一个类被创建

    this.address = address;
    this.name = name;
  }
  loan(): void {
    console.log(this.name + " 银行贷款");
  }
}
let o: CommercialBank = new CommercialBank("Df", "Df");

function createInstanceFactory2<T>(Constructor: { new (...arg: any): T }): T {
  console.log(Constructor.name + "被创建对象");
  return new Constructor("广大银行", "万绿园");
}
// type 或者interface
//
let con3 = createInstanceFactory2<CommercialBank>(CommercialBank);
con3.loan();

export {};
