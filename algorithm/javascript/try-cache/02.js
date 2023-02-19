function test3() {
    var obj = {a:1};
    try {
        return obj.a;
    } finally {
        ++obj.a;
    }
}
console.log(test3()); // 1
