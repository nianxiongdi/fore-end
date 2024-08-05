import { Food, Customer } from "./entity";
import ArrayList from "./ArrayList";

export class FoodDao {
  arrayListFood!: ArrayList;

  // 初始化数据-模拟数据表数据
  init() {
    let foodFish = new Food("F100", "十八碗", "400克泡椒鱼头");
    let foodChafing = new Food("F101", "顶呱呱", "香辣哇哇火锅");
    let foodDatong = new Food("F102", "肯德基", "大桶炸鸡");
    let foodFour = new Food("F103", "麦当劳", "冰淇凌");
    let foodFive = new Food("F104", "华莱士", "冰淇凌2");
    let foodSix = new Food("F105", "成都小吃", "蚂蚁上树");
    let foodSeven = new Food("F106", "郭林家常菜", "大乱炖");
    let foodEight = new Food("F107", "韩正味", "石锅拌饭");
    this.arrayListFood = new ArrayList<Food>();
    this.arrayListFood.add(foodFish);
    this.arrayListFood.add(foodChafing);
    this.arrayListFood.add(foodDatong);
    this.arrayListFood.add(foodFour);
    this.arrayListFood.add(foodFive);
    this.arrayListFood.add(foodSix);
    this.arrayListFood.add(foodSeven);
    this.arrayListFood.add(foodEight);

    return this.arrayListFood;
  }

  // Dao类中的查询所有美食的方法
  findAllFoods() {
    return this.init();
  }
}
