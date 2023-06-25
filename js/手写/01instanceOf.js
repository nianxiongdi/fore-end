function instanceOf (left, right) {
    // 不是基础类型
    if(typeof left !== 'object' || left === null) return false
    // 获取原型
    let proto = Object.getPrototypeOf(left)
    while(true) {
        if (proto === null) return false
        // 找到原型 返回true
        if(proto === right.prototype) return true 
        proto = Object.getPrototypeOf(proto)
    }
}




// let obj1 = {}
// let obj2 = {}

// obj1.obj2 = obj1
// obj2.obj1 = obj2

// instanceOf(obj1, Number) 

// console.log(obj2)

function Animal() {}

function Cat() {}
Cat.prototype = Object.create(Animal.prototype);

const animal = new Animal();
const cat = new Cat();

// console.log(cat instanceof Cat);       // true
// console.log(cat instanceof Animal);    // true
// console.log(animal instanceof Animal); // true
// console.log(animal instanceof Cat);    // false
console.log(instanceOf(cat, Cat));
console.log(instanceOf(cat, Animal));
console.log(instanceOf(animal, Animal));
console.log(instanceOf(animal, Cat));