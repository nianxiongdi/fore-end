function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _classPrivateFieldLooseBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
  }
  var id = 0;
  function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
  }
  var _p = /*#__PURE__*/ _classPrivateFieldLooseKey("p");
  var _m = /*#__PURE__*/ _classPrivateFieldLooseKey("m");
  // class MyClass {
  //   constructor() {
  //     this.name = 123
  //   }
  // }
  var Stu = /*#__PURE__*/ (function () {
    function Stu() {
      Object.defineProperty(this, _m, {
        value: _m2
      });
      Object.defineProperty(this, _p, {
        writable: true,
        value: 1
      });
    }
    // 静态方法 通过_classs.getThis访问
    Stu.getThis = function getThis() {
      return this;
    };
  
    // 构造函数
    var _proto = Stu.prototype;
    _proto.constructure = function constructure(name, radius) {
      this.name = name;
      this.radius = radius;
    };
    _proto.getPrivacyP = function getPrivacyP() {
      return _classPrivateFieldLooseBase(this, _p)[_p];
    };
    _proto.setPrivacyP = function setPrivacyP() {
      _classPrivateFieldLooseBase(this, _p)[_p] = 1;
    };
  
    // 实例方法 通过 new _class().getName()访问
    _proto.getName = function getName() {};
    _createClass(Stu, [
      {
        key: "radius",
        get: function get() {
          return this._radius;
        },
        set: function set(value) {
          if (value > 0) {
            this._radius = value;
          } else {
            console.error("Radius must be greater than 0.");
          }
        }
      }
    ]);
    return Stu;
  })();
  function _m2() {
    console.log("hello");
  }
  // 静态属性 通过_classs.displayName访问
  Stu.displayName = "Point";
  var stu = new Stu(1, 2);
  stu.radius;
  console.log(123);
  // stu.#p = 12;
  
  // let [a, b] = obj;
  