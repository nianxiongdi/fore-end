

// let UserFactory = function(role) {

//     if(this instanceof UserFactory){
//         var s = new this[role]();
//         return s;
//     }

//     return null;
// }

// UserFactory.prototype = {
//     // 超级管理员
//     SuperAdmin: function () {
//         this.name = '超级管理员';
//         this.viewPage = ['首页','通信录','用户权限'];
//     },
//     // 管理员
//     Admin: function () {
//         this.name = '管理员';
//         this.viewPage = ['首页','通信录'];
//     },
//     // 普通用户
//     NormalUser: function () {
//         this.name = '普通管理员';
//         this.viewPage = ['首页'];
//     }
// }


// console.log(new UserFactory('SuperAdmin').viewPage) // [ '首页', '通信录', '用户权限' ]
// console.log(new UserFactory('Admin').viewPage) // [ '首页', '通信录' ]
// console.log(new UserFactory('NormalUser').viewPage) // [ '首页' ]


// let WecharUser = function(){}
// WecharUser.prototype = {
//     getName: function(){
//         return new Error('abstract function not call.')
//     }
// }


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
    getName: function(){
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
 

