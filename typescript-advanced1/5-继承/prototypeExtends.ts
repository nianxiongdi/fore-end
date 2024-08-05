function Parent(name:string,age:number){
    this.name = name;
    this.age = age;
}
Parent.prototype.friends = ['张三','李四'];
Parent.prototype.eat = function(){
    console.log(this.name + ' 吃饭');
}

function Son(favor:string,sex:string){
    this.favor = favor;
    this.sex = sex;
}

let parent = new Parent('王五',23);
// 原型继承
Son.prototype = parent;
let son = new Son('打篮球','男')
console.log(son,son.name)
export {};
