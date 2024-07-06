




console.log(foo());// TypeError: foo is not a function
var a = true;
if (a) {
    function foo() {
        console.log('a')
    }
} else {
    function foo() {
        console.log('b')
    }
}

console.log(foo);


 