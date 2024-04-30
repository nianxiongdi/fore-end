// let a3: unique symbol = Symbol(1);
let sym = Symbol();
// TypeScript understands 'sym' is of type 'symbol'


class ChinesePeople {
    // 准备类
    public name: string
    public sex: string
    public phone: string
    public national: string
  
    constructor(name: string, sex: string, phone: string, national: string) {
      this.name = name
      this.sex = sex
      this.phone = phone
      this.national = national
    }
    eat() {
        console.log(123);
        
    }
  }
  //1. 一个类的构造函数的类型表示1：new (name: string, sex: string, phone: string, national: string) => ChinesePeople
  let MyChinesePeople: new (
    name: string,
    sex: string,
    phone: string,
    national: string
  ) => ChinesePeople = ChinesePeople //S99

// 2. typeof声明构造函数
let MyChinesePeople12: typeof ChinesePeople = ChinesePeople
//new MyChinesePeople12()//=new =new ChinesePeople(....);
let cp = new MyChinesePeople12('wangwu', '男', '1111', '汉族')
cp.eat()

// 3.any参数构造函数
let MyChinesePeople2: new (...args: any[]) => any = ChinesePeople
//new MyChinesePeople2(...);//=new ChinesePeople(...);

type Constructor<T> = new (...args: any[]) => T
// ChinesePeople是为了具体化泛型T的一个类型
let MyChinesePeople3: Constructor<ChinesePeople> = ChinesePeople




class Order{
    public id:number
    public no:string
    constructor(id:number, no:string) {
        this.id = id
        this.no = no
    }
}

// 对象实例的typeof
const order = new Order(1, 'sadsadadsa');
type o = typeof order
let order1:o = new Order(1, 'sadsadadsa');

// 对象构造函数的typeof 
type O = typeof Order // 这里指的是构造函数
let s111:O = Order
new s111(1, 'sadsadadsa')
