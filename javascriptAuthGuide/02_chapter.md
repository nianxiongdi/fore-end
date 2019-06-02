

# 语法结构

## 字符集

* js程序使用Unicode字符集编写的，Unicode和是ascii和Latin-1的超集，并支持地球上几乎所有语言。
* js区分大小写， ‘WHILE’与while是不同的， 一个是字符串一个是关键字；html不要区分大小写
* js定义特许序列，使用6个ascii字符来代表任意16位Unicode内码。
* `直接量` - 程序中`直接`使用的`数据值`。
    * "Hello" //字符串
    * /javascript/gi  //正则表达式直接量　（用作模式匹配）
    * null
* `标识符` - 由　_ 、$、字母、数字(不能以数字开头)组成。
    * _user // ok
    * 1d // error
* `保留字`　- 一些标识符拿出来做自己的关键字。保留字不能做标识符。
    * [参考](https://www.cnblogs.com/lifeidg/p/10297278.html)
* `严格模式`　- 'use strict'
    * 为整个脚本文件开启严格模式，需要在所有语句之前放一个特定语句 "use strict"; （或 'use strict';）
    ```js
        "use strict";
        var v = "Hi!  I'm a strict mode script!";

    ```
    * 要给某个函数开启严格模式，得把 "use strict";  (或 'use strict'; )声明一字不漏地放在函数体所有语句之前。

    ```js
    function strict() {
        // 函数级别严格模式语法
        'use strict';
        function nested() { 
            return "And so am I!"; 
        }
        return "Hi!  I'm a strict mode function!  "   + nested();
    }

    function notStrict() { 
    return "I'm not strict."; 
    }
    ```
    * [参考资料](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
    * `严格模式下八进制禁止使用`
* `分号` - 一条语句以（，[ 、/、 +、-开始，和前一条语句在一起解析。所以在[前的语句要记得加分号，否则会报错。
    ```js
        var x=0
        ;[x,x+1].forEach(console.log) //没有分号的话，js会认为是一个语句，会报错。
    ```
    * return、break、couninue 不能出现换行。
    ```js
        return 
        true; // 被js解析为 return; true;
    ```
    * --, ++ 在`没有分号的情况`下，运算符则会与`下一行代码的前缀操作符`在一起解析；
    ```js
        x
        ++
        y //别解析为x;++y而不是x++;y
    ```

