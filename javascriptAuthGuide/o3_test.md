


#类型、值和变量

* `数据类型`　－　能够表示并操作的值的类型。

* ｊｓ有自己的内存和管理机制，自动对内存进行垃圾回收，当一个对象没有引用时，自动回收它所占用的内存资源。
* 除了对象拥有方法，数字、字符串和boolean也有。
* js变量是无类型的，可以被赋值任何类型的值。


## 数字

* js所有的数字都是浮点数值表示的。
* `数字直接量` - 当一个数字`直接`出现在js程序中。
```js
0xff //16禁止 15*16^0 + 15*16^1 = 122(10禁止)
0Xff

0123 // 八进制以数字0开头，不是字母o

```
* `Infinity` - 是无穷大值。 `-Infinity` - 是负无穷大值。
    * 加减乘除还是无穷大，保留正负号.
        ```js
            1/0 //Infinity
            -1/0 //-Infinity

            0/0 //NaN
            Infinity/Infinity //NaN
            Infinity ='a' //"a" 
            Number.POSITIVE_INFINITY //Infinity
            1/0 //Infinity
            Number.NEGATIVE_INFINITY //-Infinity
            -1/0 //-Infinity
            -Number.MAX_VALUE - 1 //-1.7976931348623157e+308
            NaN //NaN
            Number.NaN //  NaN
            0/0 //NaN
            Number.MIN_VALUE/2 //0 发生下溢出 结果为0
            Number.MIN_VALUE //5e-324
            -Number.MIN_VALUE/2 //-0 发生下溢出 结果为0
            -1 /Infinity //-0
            -0 //-0
            -0 == 0 // true
        ```
    * `NaN` - 非数字;给任意负数做开方运算或算术运算与不是数字或无法转换为数字的操作在一起使用都将返回NaN.
    * NaN - 它与任何值都不相等,包括自身. 判断方法
    ```
        x= nan
        x!=x // 方法1 true 
        isNaN(x) //方法2
    ```
    * `isFinite()` - 不是Nan, -nan,Infinity,-Infinity返回true.
    * 和数学一样,无穷大之间不相等

# 字符串
* js字符串是固定不变的.replace,toUpperCase都是返回新的字符串.原字符串不变.
* 字符串直接量,拆分为多行 - 反斜杠(\)
```js
/**
 * 字符串如何写多行
 * */
const str = "slect * from \
student \
join sourse \
student.id = sourse.id"

console.log(str)
// slect * from student join sourse student.id = sourse.id
```
* 撇和单引号是同一个字符
```js
'\''=="'" // true
```

## boolean
* js任意值都是转换为boolean
* 以下值会转换为false:undefined,null,0,-0,NaN,""
* Infinity会转换为true

https://www.cnblogs.com/communist/p/5952905.html

## String

* `判断是空数组还是空对象` - 使用JSON.stringfy(obj)
```js
const list = [];
JSON.stringify(list); // "[]"
const obj = {};
JSON.stringify(obj); // "{}"
```

## null 和 undefined
* `null` - 代表为空值, typeof null; // "object"字符串
*　`undefined` - 代表为空缺，表明变量没有初始化．若变量没有被定义则返回undefined，若函数没有返回值，则也为undefined．
```js

let a ;
console.log(a); // undefined

fun = function() { 
        let a = 1; 
    }
console.log(fun()) // undefined
```
* 当对象为null或undefined时,使用"."或"[]"来存取属性,都会出现错误.



## 包装对象
* `在我们使用字符串的时候,为什么可以使用s.length呢?- 就是应为此时,js引擎内部,自动的把字符串封装为字符串对象,在引用完毕后,自动销毁.`
* `定义` - 分别与数值、字符串、布尔值相对应的Number、String、Boolean三个原生对象。这三个原生对象可以把原始类型的值变成（包装成）对象.

```js
var v1 = new Number(123); // 返回一个Number对象
var v2 = new String('abc');
var v3 = new Boolean(true);

// 上面代码中，基于原始类型的值，生成了三个对应的包装对象。

typeof v1 // "object"
typeof v2 // "object"
typeof v3 // "object"

v1 === 123 // false
v2 === 'abc' // false
v3 === true // false

 // 以下为字符串而不是对象
Number(123) 
typeof Number(123) // "number"
```

```js
var s = 'xy2';
s.len = 3; // 当是个临时对象修改完毕后,就自动销毁了.
var t = s.len; 
console.log(t); // undefined
```

## 原始值
* `undefined, null, boolean, number, string` - 是不可改变的.
```js
let s = "hello" // 定义一个字符串
s.toUpperCase() // "HELLO" 这里会封装为临时对象,引用完毕之后,销毁
s // hello
```

* 原始值在 比较的时候,只有在他们值相等的时,才会相等.

## 可变的对象引用
* 这里和java里面,我认识是一样的.
```js
var o = {x:1} ,p = {x:1};
o === p; //false 单独的鲁昂个对象永不相等
o == p; //false 单独的鲁昂个对象永不相等

[] == [] //false
[] === [] //false

var a = [];
var b  = a;
a == b; //true 引用为同一个数组, 所以相等
a === b; //true
```

## 类型转换
* js将根据需要自行转换类型．
* 若期望一个类型为number或string, 会把　"123" <-> 123
* 若期望为一个ｂoolean , 会把 "123" -> true
```js
"123" + 12 //"12312"
10 + "xy2" //"10xy2"
"7"* 4 //28
8 * false //0
8 * true //8
var n = 1 - "x"; //undefined
n //NaN
n + "abc" //"NaNabc" number -> string

typeof NaN //Number
```