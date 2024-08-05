// https://img-blog.csdnimg.cn/fa2dfe695ddc4afe870599389de52027.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAZHJ1bmvllrXlkqo=,size_20,color_FFFFFF,t_70,g_se,x_16

function QQUser(QQNo, QQAge, QQMark) {
  this.QQNo = QQNo;
  this.QQAge = QQAge;
  this.QQMark = QQMark;
}

QQUser.prototype.QQMark = "abc";

QQUser.prototype.commonfriends = ["骑驴看海", "大漠上的英雄", "小草"];
QQUser.prototype.show = function () {
  console.log('>>> ', this)
  console.log(`QQ号：${this.QQNo},QQ龄：${this.QQAge},QQ标注：${this.QQMark}`);
  console.log(`共同好友：${this.commonfriends}`);
};

let zhangshan = new QQUser("张三", 15, "王阳明传人");
let lisi = new QQUser("里斯", 5, "张飞弟子");
let liuwu = new QQUser("刘五", 11, "飞来的鸭子");

zhangshan.show();
lisi.show();
liuwu.show();

// 打印的是实例上的值而不是prototype上的
// 说明用对象访问一个属性时，会先访问实例上的属性，实例上没有找到该属性，就会在原型上查找
// 实例对象和__proto__对象，是一种继承关系
console.log("zhangshan.QQMark:", zhangshan.QQMark);

/* ----------- 高频面试题：创建实例后在覆盖原型，实例对象无法访问到，为什么 ------------- */
// 给构造函数的原型重新赋值
QQUser.prototype = {
  commonfriends: ["海草", "猫陛下", "男神"],
};

console.log("zhangshan", zhangshan.commonfriends);
// zhangshan [ '骑驴看海', '大漠上的英雄', '小草' ]

console.log("QQUser.prototype", QQUser.prototype.commonfriends);
// QQUser.prototype [ '海草', '猫陛下', '男神' ]

let yaoguang = new QQUser("摇光", 12, "猫陛下");
console.log("yaoguang", yaoguang.commonfriends);
// yaoguang [ '海草', '猫陛下', '男神' ]

/**
 * zhangshan的原型对象指向还是原来的空间
 * 我们改变的是原型对象的指向空间
 * 从上往下执行，不能改变已经分配好的内存空间
 */

/* ------ 思考题：`zhangshan.__proto__.show()`和`zhangshan.show()`输出结果完全一样吗？为什么呢 ---------- */
console.log(zhangshan.__proto__);
console.log(zhangshan);

console.log('-------------- 1');

console.log('>>> show', zhangshan.__proto__.show());
console.log('-------------- 2');

console.log(zhangshan.show());

