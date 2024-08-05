// 实体类   和数据表对应的一个实体

// 食物类
export class Food {
  // 数据传送的载体
  constructor(
    public foodid: string,
    public shop: string,
    public foodName: string
  ) {}
}

// 花类
export class Flower {}

// 顾客类
export class Customer {}
