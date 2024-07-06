

Function.prototype.call = function(context, ...args) {
    // console.log(1)
    // console.log('>>> this.', context)
    var context = context || {} //保证唯一性
    const fn = Symbol('fn')
    context[fn] = this
    const result = context[fn](...args)
    delete context[fn]
    return result
}

// https://www.cnblogs.com/fanqshun/p/16746543.html


function fn1() {
    console.log(1)
}

function fn2() {
    console.log(2)
}


// fn1.call(fn2)
fn1.call.call(fn2)




 




