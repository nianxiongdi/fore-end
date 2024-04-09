function _typeof(o) {
    "@babel/helpers - typeof";
    return (
      (_typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (o) {
              return typeof o;
            }
          : function (o) {
              return o &&
                "function" == typeof Symbol &&
                o.constructor === Symbol &&
                o !== Symbol.prototype
                ? "symbol"
                : typeof o;
            }),
      _typeof(o)
    );
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
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
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : String(i);
  }
  function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _classPrivateMethodInitSpec(obj, privateSet) {
    _checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
  }
  function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }
  function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError(
        "Cannot initialize the same private elements twice on an object"
      );
    }
  }
  function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
    _classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
  function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }
  }
  function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
    return _classApplyDescriptorGet(receiver, descriptor);
  }
  function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError(
        "attempted to " + action + " private field on non-instance"
      );
    }
    return privateMap.get(receiver);
  }
  function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
  var _p = /*#__PURE__*/ new WeakMap();
  var _m = /*#__PURE__*/ new WeakSet();
  // class MyClass {
  //   constructor() {
  //     this.name = 123
  //   }
  // }
  var Stu = /*#__PURE__*/ (function () {
    function Stu() {
      _classCallCheck(this, Stu);
      _classPrivateMethodInitSpec(this, _m);
      _classPrivateFieldInitSpec(this, _p, {
        writable: true,
        value: 1
      });
    }
    _createClass(
      Stu,
      [
        {
          key: "constructure",
          value:
            // 构造函数
            function constructure(name, radius) {
              this.name = name;
              this.radius = radius;
            }
        },
        {
          key: "getPrivacyP",
          value: function getPrivacyP() {
            return _classPrivateFieldGet(this, _p);
          }
        },
        {
          key: "setPrivacyP",
          value: function setPrivacyP() {
            _classPrivateFieldSet(this, _p, 1);
          }
  
          // 实例方法 通过 new _class().getName()访问
        },
        {
          key: "getName",
          value: function getName() {}
        },
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
      ],
      [
        {
          key: "getThis",
          value:
            // 静态方法 通过_classs.getThis访问
            function getThis() {
              return this;
            }
        }
      ]
    );
    return Stu;
  })();
  function _m2() {
    console.log("hello");
  }
  // 静态属性 通过_classs.displayName访问
  _defineProperty(Stu, "displayName", "Point");
  var stu = new Stu(1, 2);
  stu.radius;
  console.log(123);
  // stu.#p = 12;
  
  // let [a, b] = obj;
  