// https://img-blog.csdnimg.cn/bff5845924794e678028c3a2073a34b4.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAZHJ1bmvllrXlkqo=,size_20,color_FFFFFF,t_70,g_se,x_16
// https://img-blog.csdnimg.cn/cc05156f53cd48a8b3b5a92843f5a7d6.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAZHJ1bmvllrXlkqo=,size_20,color_FFFFFF,t_70,g_se,x_16

function QQUser(QQNo, QQAge, QQMark) {
  this.QQNo = QQNo;
  this.QQAge = QQAge;
  this.QQMark = QQMark;
  // 引用类型
  this.commonfriends = ["骑驴看海", "大漠上的英雄", "小草"];
  this.show = function () {
    console.log(
      `QQ号：${this.QQNo},QQ龄：${this.QQAge},QQ标注：${this.QQMark}`
    );
    console.log(`共同好友：${this.commonfriends}`);
  };
}

// 对象也是实例
// zhangshan是对象变量，对象是等号右边通过new 出来的一个实例，而且是运行期间才在堆中开辟对象的内存空
let zhangshan = new QQUser("张三", 15, "王阳明传人");
let lisi = new QQUser("里斯", 5, "张飞弟子");
let liuwu = new QQUser("刘五", 11, "飞来的鸭子");

// commonfriends属性相同，但每次new 一个实例，就会开辟一个新的空间，造成空间浪费
zhangshan.show();
lisi.show();
liuwu.show();
