// ![请添加图片描述](https://img-blog.csdnimg.cn/557c68b3efcd4c3ca7cb10f742996509.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAZHJ1bmvllrXlkqo=,size_20,color_FFFFFF,t_70,g_se,x_16)

// let obj = {} 等同于 new Object() ,会开辟一个新的空间,obj是指向空间的地址
/**
 * let obj = new Object()
 * obj.username = "lisi";
 * obj.phone = "123";
 * obj.age = 22
 */

let obj = {
  username: "wangwu",
  age: 22,
};
obj.username = "lisi";
obj.phone = "123";

// obj,obj2同时指向 new Object()空间
let obj2 = obj;

// obj重新指向另一个对象，旧的对象被obj2引用，不会被垃圾回收机制回收
/**
 * let obj = new Object()
 * obj.address = "北京海淀区西三环";
 */
obj = {
  address: "北京海淀区西三环",
};
console.log("obj:", obj); // obj: { address: '北京海淀区西三环' }
console.log("obj2:", obj2); //obj2: { username: 'lisi', age: 22, phone: '123' }
