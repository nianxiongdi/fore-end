
## 柯里化

* 实现多函数的技术

例子:
```js
var curry = function (fn) {
    //利用闭包来保存参数
    var _args = [];

    return function () {
        //如果参数为0返回计算结果
        if (arguments.length === 0) {
            return fn.apply(this, _args);
        }
        
        //否则将参数添加到_args中并返回当前函数
        [].push.apply(_args, arguments);
        return arguments.callee;
    }
};

var add = curry(function () {
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    })
});

add(2, 4);
add(4);
add(2, 3, 45);  
//此时函数并未执行加法运算，只是保存了添加的参数

add();
//这里执行了加法运算，返回计算结果60

```

```js
var currying = function(fn) {
    var args = [].slice.call(arguments, 1);
 
    return function() {
        // 主要还是收集所有需要的参数到一个数组中，便于统一计算
        var _args = args.concat([].slice.call(arguments));
        return fn.apply(null, _args);
    }
}

var sum = currying(function() {
    var args = [].slice.call(arguments);
    return args.reduce(function(a, b) {
        return a + b;
    })
}, 10)

console.log(sum(20, 10));  // 40
console.log(sum(10, 5));   // 25

 
```


参考:
* https://juejin.im/post/5af13664f265da0ba266efcf
* https://www.jb51.net/article/121360.htm
* https://www.jianshu.com/p/2975c25e4d71
* https://juejin.im/post/5abb90ca6fb9a028c5233dfe
* https://juejin.im/post/5abb90ca6fb9a028c5233dfe
* https://juejin.im/post/5b3879096fb9a00e740eeb65


原型:
* https://hexianzhi.github.io/2017/04/27/JavaScript%E5%8E%9F%E5%9E%8B/