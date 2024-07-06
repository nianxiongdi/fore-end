/*
按照如下要求实现Person 和 Student 对象
 a)Student 继承Person 
 b)Person 包含一个实例变量 name， 包含一个方法 printName
 c)Student 包含一个实例变量 score， 包含一个实例方法printScore
 d)所有Person和Student对象之间共享一个方法
*/

// https://cloud.tencent.com/developer/article/2226846
class Person  {
    constructor(name){
        this.name = name
    }

    printName() {
        console.log(this.name)
    }
}


class Student extends Person {
    constructor(name, score) {
        super(name)
        this.score = score
    }

    printScore() {
        console.log(this.score)
    }
}

let stu = new Student('小红');
let person = new Person('小紫');


stu.printName()
person.printName()