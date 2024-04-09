
// 累加
var id = 0;

// 设置
function _classPrivateFieldLooseKey(name) {
  return "__private_" + id++ + "_" + name;
}

var _p = /*#__PURE__*/ _classPrivateFieldLooseKey("p");

function fun() {
    Object.defineProperty(this, _p, {
        writable: true,
        value: 1
    });
}

// 校验key是否存在
function _classPrivateFieldLooseBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
}

var _proto = fun.prototype;
// 构造函数
_proto.constructure = function constructure(name, radius) {
    this.name = name;
    this.radius = radius;
};
// 获取私有属性
_proto.getPrivacyP = function getPrivacyP() {
    return _classPrivateFieldLooseBase(this, _p)[_p];
};
// 设置私有属性
_proto.setPrivacyP = function setPrivacyP() {
    _classPrivateFieldLooseBase(this, _p)[_p] = 1;
};

const f = new fun()
console.log(f.getPrivacyP())


