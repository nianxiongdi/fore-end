function A() {}
function B(a) {
    this.a = a;
}
function C(a) {
    if (a) {
        this.a = a;
    }
}
A.prototype.a = 1;
B.prototype.a = 2;
C.prototype.a = 3;

console.log(new A().a);  
console.log(new B().a);  
console.log(new C(2).a); 

// A.prototype.a = 1;

// A.prototype === Function.prototype {a: 3}


//  a.__proto__  -> Object.prototype -> Function.prototype 1
// {a: undefined}

// 2