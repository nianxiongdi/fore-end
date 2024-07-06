class Parent {
    constructor(name) {
        if (new.target === undefined) {
            throw new Error("Class constructor Parent cannot be invoked without 'new'");
        }
        this.name = name;
        console.log(`Parent constructor called with name: ${name}`);
    }
}

class Child extends Parent {
    constructor(name, age) {
        // 错误做法：使用 call 调用父类构造函数
        Parent.apply(this, name);
        this.age = age;
        console.log(`Child constructor called with age: ${age}`);
    }
}

try {
    const childInstance = new Child("John", 30);
} catch (error) {
    console.error(error.message);  // 输出错误信息
}
// 输出:
// Class constructor Parent cannot be invoked without 'new'
