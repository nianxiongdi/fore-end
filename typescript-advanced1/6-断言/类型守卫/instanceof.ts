class Vechile {
  static count;
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
}

class Bus extends Vechile {
  busPrice() {
    return 200;
  }
}

class Truck extends Vechile {
  truckPrice() {
    return 260;
  }
}

class Car extends Vechile {
  carPrice() {
    return 300;
  }
}

class Customer {
  rentVechile(vechile: Bus | Car | Truck) {
    if (vechile instanceof Bus) {
      vechile.busPrice();
    } else if (vechile instanceof Car) {
      vechile.carPrice();
    } else {
      vechile.truckPrice();
    }
  }
}

export {};
