
## 工厂模式
* 用来创建对象，不暴露对象创建的过程，而是将逻辑封装在一个函数中。
* 分类：`简单工厂`、`工厂方法`和`抽象工厂`。

## 简单工厂模式

* 简单工厂模式又叫静态工厂模式，由一个工厂对象决定创建某一种产品对象类的实例。主要用来创建同一类对象。

```js

// 创建不同的用户，得到不同的权限
let UserFactory = function(role) {

    // 超级管理员
    function SuperAdmin() {
        this.name = '超级管理员';
        this.viewPage = ['首页','通信录','用户权限'];
    }

    // 管理员
    function Admin() {
        this.name = '管理员';
        this.viewPage = ['首页','通信录'];
    }

    // 普通用户
    function NormalUser() {
        this.name = '普通管理员';
        this.viewPage = ['首页'];
    }


    switch(role.toLowerCase()) {
        case 'super':
            return new SuperAdmin();
        case 'admin':
            return new Admin();
        case 'user':
            return new NormalUser();
        default:
            throw new Error('parameter error!');
    }
}


console.log(UserFactory('super').viewPage); // [ '首页', '通信录', '用户权限' ]
console.log(UserFactory('admin').viewPage); // [ '首页', '通信录' ]
console.log(UserFactory('user').viewPage); // [ '首页' ]
console.log(UserFactory('other').viewPage); //error
```

## 工厂方法

* 通过原型去创建，也就是移到子类去创建。

```js


let UserFactory = function(role) {

    if(this instanceof UserFactory){
        var s = new this[role]();
        return s;
    }

    return null;
}

UserFactory.prototype = {
    // 超级管理员
    SuperAdmin: function () {
        this.name = '超级管理员';
        this.viewPage = ['首页','通信录','用户权限'];
    },
    // 管理员
    Admin: function () {
        this.name = '管理员';
        this.viewPage = ['首页','通信录'];
    },
    // 普通用户
    NormalUser: function () {
        this.name = '普通管理员';
        this.viewPage = ['首页'];
    }
    //  可以在设立进行扩展其他的对象进行创建
}


console.log(new UserFactory('SuperAdmin').viewPage) // [ '首页', '通信录', '用户权限' ]
console.log(new UserFactory('Admin').viewPage) // [ '首页', '通信录' ]
console.log(new UserFactory('NormalUser').viewPage) // [ '首页' ]
```


## 抽象工厂模式

* 在抽象工厂中，类簇一般用父类定义，并在`父类`中定义一些`抽象方法`，再通过抽象工厂让子类继承父类。所以，抽象工厂其实是实现`子类继承父类的方法`。
* 上面例子中的superAdmin，admin，user三种用户角色，其中user可能是使用不同的社交媒体账户进行注册的，例如：wechat，qq，weibo。那么这三类社交媒体账户就是对应的类簇。



```js

let AccountAbstractFactory = function(subType, superType) {
    if(typeof AccountAbstractFactory[superType] === 'function'){
        function F(){}
        F.prototype = new AccountAbstractFactory[superType]();
        subType.constructor = subType;
        subType.prototype = new F();
    }else {
        throw new Error('abstract not exist!')
    }
}

// 微信用户抽象类
AccountAbstractFactory.WechatUser = function(){
    this.type = 'wechat';
}
AccountAbstractFactory.WechatUser.prototype = {
    getName: function(){ // 使用函数来抛出异常
        return new Error('abstract function not call.')
    }
}

// qq用户抽象类
AccountAbstractFactory.QqUser = function(){
    this.type = 'qq';
}
AccountAbstractFactory.QqUser.prototype = {
    getName: function(){
        return new Error('abstract function not call.')
    }
}

// 微博用户抽象类
AccountAbstractFactory.WeiboUser = function(){
    this.type = 'weibo';
}
AccountAbstractFactory.WeiboUser.prototype = {
    getName: function(){
        return new Error('abstract function not call.')
    }
}

// 微信的子类
function UserOfWechat(name){
    this.name = name;
    this.viewPage = ['首页','通信录','用户权限'];
}

AccountAbstractFactory(UserOfWechat, 'WechatUser')

// 需要重写抽象类的方法
UserOfWechat.prototype.getName = function(){
    return this.name;
}

let wetChatUser = new UserOfWechat('qy');
console.log(wetChatUser.getName(), wetChatUser.type);
```
