// 构造器重载

type type_ChartParam = {
  width?: number;
  height?: number;
  radius?: number;
};

class Square {
  public width: number;
  public height: number;

  // 构造器重载
  constructor(width_: number, height_: number); // 重载签名
  constructor(paramObj: type_ChartParam);
  constructor(paramObjOrWidth_: any, height_: number = 0) {
    // 实现签名

    if (typeof paramObjOrWidth_ === "object") {
      this.width = paramObjOrWidth_.width;
      this.height = paramObjOrWidth_.height;
    } else {
      this.width = paramObjOrWidth_;
      this.height = height_;
    }
  }

  public getArea(): number {
    return this.height * this.width;
  }
}

let char1 = new Square(1, 2);
let char2 = new Square({ height: 3, width: 4 });
console.log(char1.getArea(), char2.getArea());
