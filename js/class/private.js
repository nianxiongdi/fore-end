

// https://segmentfault.com/a/1190000023136396

let Person = (function() {
    let _name = ""

    return function (name) {
        console.log(">> name", name)
        _name = name
    }
})()



 








const p = new Person('qy')
