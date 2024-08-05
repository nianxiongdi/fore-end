class Vechile {
  static count: number = 3;
  public total: number = 0;
  // 品牌 车牌号 租赁天数 押金
  constructor(
    public brand: string,
    public vechileNo: string,
    public days: number,
    public deposit: number
  ) {}

  calculate() {
    this.total = this.days * 100;
  }

  payDesposit() {
    console.log(this.brand + " 车牌号为：" + this.vechileNo + " 开始被租");
  }

  price() {
    console.log("350 元");
  }
}

class Bus extends Vechile {
  price() {
    console.log("320 元");
  }
}

class Truck extends Vechile {
  price() {
    console.log("310 元");
  }
}

class Car extends Vechile {
  price() {
    console.log("300 元");
  }
}

// 多态
class Customer1 {
  rentVechile(vechile: Vechile) {
    vechile.price();
  }
}

let customer = new Customer1();
let car = new Car("普拉多", "京22222", 3, 10000);
let bus = new Bus("bus", "京11222", 3, 10000);
let truck = new Truck("普拉多", "京22222", 3, 10000);

// price 方法重写 Vechile 与 Car , Bus 等类存在继承关系 ， 形成多态
customer.rentVechile(car);
customer.rentVechile(bus);
customer.rentVechile(truck);

export {};
