
### Mocha

* 作用是`运行测试脚本`, 首先要学会写.
* `测试脚本`与所要`测试的源码脚本同名`.但是后缀名为.test.js（表示测试）或者.spec.js（表示规格）.比如，`add.js`的测试脚本名字就是`add.test.js`。
* 测试脚本里面应该包括一个或多个describe块，每个describe块应该包括一个或多个it块。
    * describe块称为"测试套件"（test suite），`表示一组相关的测试`.它是一个函数，第一个参数是`测试套件的名称`（"加法函数的测试"），第二个参数是一个`实际执行的函数`。
    * it块称为`测试用例`（test case),表示一个单独的测试，是测试的最小单位。它也是一个函数，第一个参数是测试用例的名称（"1 加 1 应该等于 2"），第二个参数是一个实际执行的函数。



### 断言库的用法

* 所谓"断言"，就是`判断源码的实际执行结果与预期结果是否一致`，如果不一致就抛出一个错误。下面这句断言的意思是，调用add(1, 1)，结果应该等于2。

* 所有的`测试用例（it块）都应该含有一句或多句的断言`。它是编写测试用例的关键。断言功能由断言库来实现，`Mocha本身不带断言库`，所以`必须先引入断言库`。

* 断言库有很多种，Mocha并不限制使用哪一种。上面代码引入的断言库是chai，并且指定使用它的expect断言风格。



```js

// add.js
function add(x, y) {
    return x + y;
}
module.exports = add;

// add.test.js
var add = require('./add.js');
var expect = require('chai').expect;

describe('加法函数的测试', function() {
    it('1 加 1 应该等于 2', function() {
        expect(add(1, 1)).to.be.equal(3);
    });
});
```

```js

// 相等或不相等
expect(4 + 5).to.be.equal(9);
expect(4 + 5).to.be.not.equal(10);
expect(foo).to.be.deep.equal({ bar: 'baz' });

// 布尔值为true
expect('everthing').to.be.ok;
expect(false).to.not.be.ok;

// typeof
expect('test').to.be.a('string');
expect({ foo: 'bar' }).to.be.an('object');
expect(foo).to.be.an.instanceof(Foo);

// include
expect([1,2,3]).to.include(2);
expect('foobar').to.contain('foo');
expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

// empty
expect([]).to.be.empty;
expect('').to.be.empty;
expect({}).to.be.empty;

// match
expect('foobar').to.match(/^foo/);
```

基本上，expect断言的写法都是一样的。头部是expect方法，尾部是`断言方法`，比如`equal`、`a/an`、`ok`、`match`等。两者之间使用`to或to.be连接`。

如果expect断言不成立，就会抛出一个错误。事实上，只要不抛出错误，测试用例就算通过。

```js
it('1 加 1 应该等于 2', function() {});
```
上面的这个测试用例，内部没有任何代码，由于没有抛出了错误，所以还是会`通过`


### Mocha的基本用法


