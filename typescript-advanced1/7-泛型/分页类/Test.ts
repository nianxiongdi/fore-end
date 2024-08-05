import Pager from "./Pager";
import { FoodDao } from "./dao";

// 第一页
let pager = new Pager(3);
let foodDao = new FoodDao();
let allFoods = foodDao.findAllFoods();

pager.dataList = allFoods;
console.log(pager.showCurrentPageData());

/*
[
  Food { foodid: 'F106', shop: '郭林家常菜', foodName: '大乱炖' },
  Food { foodid: 'F107', shop: '韩正味', foodName: '石锅拌饭' }
]
*/
