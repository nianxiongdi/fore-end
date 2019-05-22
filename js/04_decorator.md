

## Javascript中装饰器

### 作用
* 基于Node的web服务器开发中使用decorator对`请求进行权限校验`和`数据格式的处理`是一个看起来比较漂亮的写法.
* Decorators make it possible to annotate and modify classes and properties at design time.(运行时改变类或者类的属性)




### 实现原理

在自己也很好奇,为啥在方法或者类上面直接`@log`,就出输出log信息呢,百思不得其解其中的原因,下面介绍下:

用什么实现的:`Object.defineProperty(obj, prop, descriptor)`

* 参数1: 目标对象或函数
* 参数2: 需要定义的`属性`或`方法的名字`
* 参数3: 目标属性所拥有的`特性`
    * configurable控制是不是能删、能修改descriptor本身。
    * writable控制是不是能修改值。
    * enumerable控制是不是能枚举出属性。
    * value控制对应的值，方法只是一个value是函数的属性。
    * get和set控制访问的读和写逻辑。

`通过处理descriptor可以改变原有属性`。
参考我的另一篇文章.[这里](https://blog.csdn.net/qq_30638831/article/details/89055829)


这里以一个类的属性的装饰器的例子:
* ES6中的类实际上就是一个语法糖，本质上是构造函数，类的属性的定义使用的是 Object.defineProperty() 用一个简单的栗子来理解如下：

```js
class Cat {
    say() {
        console.log("meow ~");
    }
}
//我们使用 装饰器 对一类进行装饰 如下,就得到以上的类和say函数
---------------------

function Cat() {}
Object.defineProperty(Cat.prototype, "say", {
    value: function() { console.log("meow ~"); },
    enumerable: false,
    configurable: true,
    writable: true
});
```
细心的小伙伴已经发现了

Object.defineProperty(obj, prop, descriptor)
`接收的参数和作用于类的属性的时候装饰器函数的接收的参数很像。`

可以知道作用于类的属性的时候的装饰器函数接收的参数就是上述ES6中的类定义属性时候使用Object.defineProperty时接收的参数，一模一样...

本质上也就是说`装饰器在作用于类的属性的时候，实际上是通过 Object.defineProperty 来对原有的descriptor进行封装`.

被装饰的属性的定义在实际上执行的是以下的代码：

```js
//和上面的例子是对应的
let descriptor = {
    value: function() {
        console.log("meow ~");
    },
    enumerable: false,
    configurable: true,
    writable: true
};
descriptor = readonly(Cat.prototype, "say", descriptor) || descriptor;
Object.defineProperty(Cat.prototype, "say", descriptor);
```


也就是说，上面的那个@readonly其实就是
```js
descriptor = readonly(Cat.prototype, "say", descriptor) || descriptor;
```
的语法糖，要注意的是，装饰器执行的时间是在属性定义的时候，也就是被装饰的属性在定义后就是已经被装饰器处理过的不一样的属性了。

`注意`: `装饰一个类`
* `装饰一个类`的时候类本身`本质`上是一个`函数`，`没有descriptor，target是这个函数本身`。

```js
function isAnimal(target) {
    target.isAnimal = true;
  	return target;
}
@isAnimal
class Cat {
    ...
}
console.log(Cat.isAnimal);    // true
```
也就是说，上面的@isAnimal其实就是做了下面这件事
```js
// @isAnimal 就相当于是下面的代码,对isAnimal进行操作
Cat = isAnimal(function Cat() { ... });
```

完整例子:

```js
// 属性装饰器 给no加 100的例子

function readonly(target, name, desriptor) {
  // 这个的value是一个函数
  const method = desriptor.value;

  //  学号加100
  let result = 0;
  desriptor.value = (...arr) =>{
    arr[1] += 100;

    //target 就是say的this, arr就是say的参数 name是say的名字

    // 操作之后, 进行返回
    result = method.apply(target, arr)
    return result;
  }
  
  desriptor.writable = true;
  return desriptor;
}

class Cat {
  
  constructor(name='dog', no=123){
    this.say(name, no);
  }

  @readonly //这里就相当于调用了Object.defineProperty函数
  say(name, no) {
    this.name = name;
    this.no = no;
  }
}

var cat = new Cat();

console.log(cat.name) //dog
console.log(cat.no) //233
```





### 常见使用方式

#### 装饰一个类的属性
```js
function readonly(target, name, descriptor) {
    discriptor.writable = false;
    return discriptor;
}
class Cat {
    @readonly
    say() {
        console.log("meow ~");
    }
}
var kitty = new Cat();
kitty.say = function() {
    console.log("woof !");
}
kitty.say()    // meow ~
```

#### 装饰一个类

```js
function isAnimal(target) {
    target.isAnimal = true;
  	return target;
}
@isAnimal
class Cat {
    ...
}
console.log(Cat.isAnimal);    // true
```

### 装饰器的执行的时间

* 可以看出`装饰器在定义时就执行了`，也就对应着官方的那句话：

* Decorators make it possible to annotate and modify classes and properties at design time.
在类和类的属性定义的时候就对它们进行了"装饰"。

```js
function log(message) {
    return function() {
        console.log(message);
    }
}
console.log('before class');
@log('class Bar')
class Bar {
    @log('class method bar');
    bar() {}
    @log('class getter alice');
    get alice() {}
    @log('class property bob');
    bob = 1;
}
console.log('after class');
let bar = {
    @log('object method bar')
    bar() {}
};
```

结果:
```
before class
class method bar
class getter alice
class property bob
class Bar
after class
object method bar
```


### 例子

#### 【Demo 1】对方法的装饰：装备盔甲

```js
class Man{
  constructor(def = 2,atk = 3,hp = 3){
    this.init(def,atk,hp);
  }

  init(def,atk,hp){
    this.def = def; // 防御值
    this.atk = atk;  // 攻击力
    this.hp = hp;  // 血量
  }
  toString(){
    return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
  }
}

var tony = new Man();

console.log(`当前状态 ===> ${tony}`); 

// 输出：当前状态 ===> 防御力:2,攻击力:3,血量:3
```
代码直接放在 http://babeljs.io/repl/ 中运行查看结果，记得勾选Experimental选项和Evaluate选项

创建 `decorateArmour` 方法，为钢铁侠装配盔甲——注意 `decorateArmour` 是装饰在方法init上的。

```js
function decorateArmour(target, key, descriptor) {
  const method = descriptor.value;
  let moreDef = 100;
  let ret;
  descriptor.value = (...args)=>{
    args[0] += moreDef;
    ret = method.apply(target, args);
    return ret;
  }
  return descriptor;
}

class Man{
  constructor(def = 2,atk = 3,hp = 3){
    this.init(def,atk,hp);
  }

  @decorateArmour
  init(def,atk,hp){
    this.def = def; // 防御值
    this.atk = atk;  // 攻击力
    this.hp = hp;  // 血量
  }
  toString(){
    return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
  }
}

var tony = new Man();

console.log(`当前状态 ===> ${tony}`);
// 输出：当前状态 ===> 防御力:102,攻击力:3,血量:3
```
我们先看输出结果，防御力的确增加了 100，看来盔甲起作用了。

初学者这里会有两个疑问：

* 1.decorateArmour方法的参数为啥是这三个？可以更换么？
* 2.decorateArmour方法为什么返回的是descriptor
这里给出个人的解答作为参考：

Decorators 的本质是利用了ES5的 Object.defineProperty 属性，这三个参数其实是和 Object.defineProperty参数一致的，因此不能更改，详细分析请见 细说ES7 JavaScript Decorators
可以看看 bable转换后 的代码，其中有一句是`descriptor = decorator(target, key, descriptor) || descriptor`;，点到为止，这里不详细展开了，可自行看看这行代码的上下文（参考文献中也涉及到这句代码的解释）。


#### 【Demo 2】装饰器叠加：增加光束手套

在上面的示例中，我们成功为 普通人 增加 “盔甲” 这个装饰；现在我想再给他增加 “光束手套”，希望额外增加 50 点攻击力。



Step 1：拷贝一份decorateArmour方法，改名为decorateLight，同时修改防御值的属性：
```js
function decorateLight(target, key, descriptor) {
  const method = descriptor.value;
  let moreAtk = 50;
  let ret;
  descriptor.value = (...args)=>{
    args[1] += moreAtk;
    ret = method.apply(target, args);
    return ret;
  }
  return descriptor;
}
```

Step 2：直接在init方法上添加装饰语法：

```js
  @decorateArmour
  @decorateLight
  init(def,atk,hp){
    this.def = def; // 防御值
    this.atk = atk;  // 攻击力
    this.hp = hp;  // 血量
  }
```
最后的代码如下：

```js
...
function decorateLight(target, key, descriptor) {
  const method = descriptor.value;
  let moreAtk = 50;
  let ret;
  descriptor.value = (...args)=>{
    args[1] += moreAtk;
    ret = method.apply(target, args);
    return ret;
  }
  return descriptor;
}

class Man{
  constructor(def = 2,atk = 3,hp = 3){
    this.init(def,atk,hp);
  }

  @decorateArmour
  @decorateLight
  init(def,atk,hp){
    this.def = def; // 防御值
    this.atk = atk;  // 攻击力
    this.hp = hp;  // 血量
  }
...
}
var tony = new Man();
console.log(`当前状态 ===> ${tony}`);
//输出：当前状态 ===> 防御力:102,攻击力:53,血量:3
```

在这里你就能看出装饰模式的优势了，它可以对某个方法进行叠加使用，对原类的侵入性非常小，只是增加一行@decorateLight而已，可以方便地增删；（同时还可以复用）

####【Demo 3】对类的装饰：增加飞行能力
按文章 装饰模式所言，装饰模式有两种：`纯粹的装饰模式` 和 `半透明的装饰模式`。

上述的两个demo中所使用的应该是 纯粹的装饰模式，它并不增加对原有类的接口；下面要讲demo是给普通人增加“飞行”能力，相当于给`类新增一个方法`，属于 `半透明的装饰模式`，有点儿像适配器模式的样子。
```js
function decorateArmour(target, key, descriptor) {
  const method = descriptor.value;
  let moreDef = 100;
  let ret;
  descriptor.value = (...args)=>{
    args[0] += moreDef;
    ret = method.apply(target, args);
    return ret;
  }
  return descriptor;
}

function decorateLight(target, key, descriptor) {
  const method = descriptor.value;
  let moreAtk = 50;
  let ret;
  descriptor.value = (...args)=>{
    args[1] += moreAtk;
    ret = method.apply(target, args);
    return ret;
  }
  return descriptor;
}

// 当装饰类的时候,只有一个参数
function addFly(canFly){
  return function(target){
    target.canFly = canFly;
    let extra = canFly ? '(技能加成:飞行能力)' : '';
    let method = target.prototype.toString;
    target.prototype.toString = (...args)=>{
      return method.apply(target.prototype,args) + extra;
    }
    return target;
  }
}

@addFly(true)
class Man{
  constructor(def = 2,atk = 3,hp = 3){
    this.init(def,atk,hp);
  }

  @decorateArmour
  @decorateLight
  init(def,atk,hp){
    this.def = def; // 防御值
    this.atk = atk;  // 攻击力
    this.hp = hp;  // 血量
  }
  toString(){
    return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
  }
}

var tony = new Man();

console.log(`当前状态 ===> ${tony}`);
// 输出：当前状态 ===> 防御力:102,攻击力:53,血量:3(技能加成:飞行能力)
```

作用在方法上的 decorator 接收的第一个参数（target ）是类的 prototype；如果把一个 decorator 作用到类上，则它的第一个参数 target 是 类本身。（参考 Decorators in ES7 ）

### 使用原生JS实现装饰器模式

使用原生JS实现装饰器模式
关于如何用现有标准的原生JS实现的装饰模式，可参考译文
JavaScript设计模式：装饰者模式，这是一篇值得一读的文章，深入浅出。

这里用ES5重写一下上面的 Demo 1的场景，简略说一下关键点：

* Man是具体的类，Decorator 是针对 Man 的装饰器基类
* 具体的装饰类 DecorateArmour 典型地使用 prototype 继承方式 继承自 Decorator 基类；
* 基于 IOC（控制反转）思想 ，Decorator 是接受 Man 类，而不是自己创建 Man 类；
```js
// 首先我们要创建一个基类
function Man(){

  this.def = 2;
  this.atk = 3; 
  this.hp = 3;
}

// 装饰者也需要实现这些方法，遵守Man的接口
Man.prototype={
  toString:function(){
    return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
  }
}
// 创建装饰器，接收Man对象作为参数。
var Decorator = function(man){
  this.man = man;
}

// 装饰者要实现这些相同的方法
Decorator.prototype.toString = function(){
    return this.man.toString();
}

// 继承自装饰器对象
// 创建具体的装饰器，也是接收Man作对参数
var DecorateArmour = function(man){

  var moreDef = 100;
  man.def += moreDef;
  Decorator.call(this,man);

}
DecorateArmour.prototype = new Decorator();

// 接下来我们要为每一个功能创建一个装饰者对象，重写父级方法，添加我们想要的功能。
DecorateArmour.prototype.toString = function(){
  return this.man.toString();
} 

// 注意这里的调用方式
// 构造器相当于“过滤器”，面向切面的
var tony = new Man();
tony = new DecorateArmour(tony);
console.log(`当前状态 ===> ${tony}`);
// 输出：当前状态 ===> 防御力:102,攻击力:3,血量:3
```

### 经典实现：Logger

* AOP的经典应用就是 日志系统 了，那么我们也用ES7的语法给钢铁侠打造一个日志系统吧。

```js
/**
 * Created by jscon on 15/10/16.
 */
let log = (type) => {

  return (target, name, descriptor) => {
    const method = descriptor.value;
    descriptor.value =  (...args) => {
      console.info(`(${type}) 正在执行: ${name}(${args}) = ?`);
      let ret;
      try {
        ret = method.apply(target, args);
        console.info(`(${type}) 成功 : ${name}(${args}) => ${ret}`);
      } catch (error) {
        console.error(`(${type}) 失败: ${name}(${args}) => ${error}`);
      }
      return ret;
    }
  }
}
class IronMan {
  @log('IronMan 自检阶段')
  check(){
    return '检查完毕';
  }
  @log('IronMan 攻击阶段')
  attack(){
    return '击倒敌人';
  }
  @log('IronMan 机体报错')
  error(){
    throw 'Something is wrong!';
  }
}

var tony = new IronMan();
tony.check();
tony.attack();
tony.error();

// 输出：
// (IronMan 自检阶段) 正在执行: check() = ?
// (IronMan 自检阶段) 成功 : check() => 检查完毕
// (IronMan 攻击阶段) 正在执行: attack() = ?
// (IronMan 攻击阶段) 成功 : attack() => 击倒敌人
// (IronMan 机体报错) 正在执行: error() = ?
// (IronMan 机体报错) 失败: error() => Something is wrong!
```
Logger方法的关键在于：

* 首先使用 const method = descriptor.value; 将原有方法提取出来，保障原有方法的纯净；
* 在 try..catch 语句是 调用 ret = method.apply(target, args);在调用之前之后分别进行日志汇报；
* 最后返回 return ret; 原始的调用结果
相信这套思路会给后续我们实现AOP模式提供良好的借鉴。





## 参考
* https://github.com/zz1211/Doraemon/issues/1