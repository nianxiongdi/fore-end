"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _class;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;
  if ('value' in desc || desc.initializer) {
      desc.writable = true;
  }
  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
  }, desc);
  if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
  }
  if (desc.initializer === void 0) {
      Object.defineProperty(target, property, desc);
      desc = null;
  }
  return desc;
}
// 定义一个装饰器函数
function log(target, key, descriptor) {
  var originalMethod = descriptor.value;
  descriptor.value = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    console.log("\u8C03\u7528\u65B9\u6CD5 ".concat(key, "\uFF0C\u53C2\u6570\u4E3A: ").concat(JSON.stringify(args)));
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

// 定义一个类
var MyClass = (_class = /*#__PURE__*/function () {
  function MyClass() {
    _classCallCheck(this, MyClass);
  }
  _createClass(MyClass, [{
    key: "greet",
    value: function greet(message) {
      debugger;
      console.log("Hello, ".concat(message, "!"));
    }
  }]);
  return MyClass;
}(), (_applyDecoratedDescriptor(_class.prototype, "greet", [log], Object.getOwnPropertyDescriptor(_class.prototype, "greet"), _class.prototype)), _class); // 创建 MyClass 的实例
var myObj = new MyClass();

// 调用 greet 方法，会自动触发 log 装饰器
myObj.greet("World"); // 输出：调用方法 greet，参数为: ["World"]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJsb2ciLCJ0YXJnZXQiLCJrZXkiLCJkZXNjcmlwdG9yIiwib3JpZ2luYWxNZXRob2QiLCJ2YWx1ZSIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY29uc29sZSIsImNvbmNhdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJhcHBseSIsIk15Q2xhc3MiLCJfY2xhc3MiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJncmVldCIsIm1lc3NhZ2UiLCJfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwibXlPYmoiXSwic291cmNlUm9vdCI6IkU6XFxsZWFyblxcZm9yZS1lbmRcXGFsZ29yaXRobVxcZXM2XFxkZWNvcmF0b3JzXFxiYWJlbF90ZXN0XFwiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIOWumuS5ieS4gOS4quijhemlsOWZqOWHveaVsFxyXG5mdW5jdGlvbiBsb2codGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcclxuICAgIGNvbnN0IG9yaWdpbmFsTWV0aG9kID0gZGVzY3JpcHRvci52YWx1ZTtcclxuICBcclxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICBjb25zb2xlLmxvZyhg6LCD55So5pa55rOVICR7a2V5fe+8jOWPguaVsOS4ujogJHtKU09OLnN0cmluZ2lmeShhcmdzKX1gKTtcclxuICAgICAgcmV0dXJuIG9yaWdpbmFsTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfTtcclxuICBcclxuICAgIHJldHVybiBkZXNjcmlwdG9yO1xyXG4gIH1cclxuICBcclxuICAvLyDlrprkuYnkuIDkuKrnsbtcclxuICBjbGFzcyBNeUNsYXNzIHtcclxuICAgIEBsb2dcclxuICAgIGdyZWV0KG1lc3NhZ2UpIHtcclxuICAgICAgICBkZWJ1Z2dlclxyXG4gICAgICBjb25zb2xlLmxvZyhgSGVsbG8sICR7bWVzc2FnZX0hYCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIOWIm+W7uiBNeUNsYXNzIOeahOWunuS+i1xyXG4gIGNvbnN0IG15T2JqID0gbmV3IE15Q2xhc3MoKTtcclxuICBcclxuICAvLyDosIPnlKggZ3JlZXQg5pa55rOV77yM5Lya6Ieq5Yqo6Kem5Y+RIGxvZyDoo4XppbDlmahcclxuICBteU9iai5ncmVldChcIldvcmxkXCIpOyAvLyDovpPlh7rvvJrosIPnlKjmlrnms5UgZ3JlZXTvvIzlj4LmlbDkuLo6IFtcIldvcmxkXCJdXHJcbiAgIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQSxTQUFTQSxHQUFHQSxDQUFDQyxNQUFNLEVBQUVDLEdBQUcsRUFBRUMsVUFBVSxFQUFFO0VBQ2xDLElBQU1DLGNBQWMsR0FBR0QsVUFBVSxDQUFDRSxLQUFLO0VBRXZDRixVQUFVLENBQUNFLEtBQUssR0FBRyxZQUFtQjtJQUFBLFNBQUFDLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQU5DLElBQUksT0FBQUMsS0FBQSxDQUFBSixJQUFBLEdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7TUFBSkYsSUFBSSxDQUFBRSxJQUFBLElBQUFKLFNBQUEsQ0FBQUksSUFBQTtJQUFBO0lBQ2xDQyxPQUFPLENBQUNaLEdBQUcsNkJBQUFhLE1BQUEsQ0FBU1gsR0FBRyxnQ0FBQVcsTUFBQSxDQUFTQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sSUFBSSxDQUFDLENBQUUsQ0FBQztJQUN2RCxPQUFPTCxjQUFjLENBQUNZLEtBQUssQ0FBQyxJQUFJLEVBQUVQLElBQUksQ0FBQztFQUN6QyxDQUFDO0VBRUQsT0FBT04sVUFBVTtBQUNuQjs7QUFFQTtBQUFBLElBQ01jLE9BQU8sSUFBQUMsTUFBQTtFQUFBLFNBQUFELFFBQUE7SUFBQUUsZUFBQSxPQUFBRixPQUFBO0VBQUE7RUFBQUcsWUFBQSxDQUFBSCxPQUFBO0lBQUFmLEdBQUE7SUFBQUcsS0FBQSxFQUNYLFNBQUFnQixNQUNNQyxPQUFPLEVBQUU7TUFDWDtNQUNGVixPQUFPLENBQUNaLEdBQUcsV0FBQWEsTUFBQSxDQUFXUyxPQUFPLE1BQUcsQ0FBQztJQUNuQztFQUFDO0VBQUEsT0FBQUwsT0FBQTtBQUFBLE1BQUFNLHlCQUFBLENBQUFMLE1BQUEsQ0FBQU0sU0FBQSxZQUpBeEIsR0FBRyxHQUFBeUIsTUFBQSxDQUFBQyx3QkFBQSxDQUFBUixNQUFBLENBQUFNLFNBQUEsWUFBQU4sTUFBQSxDQUFBTSxTQUFBLElBQUFOLE1BQUEsR0FPTjtBQUNBLElBQU1TLEtBQUssR0FBRyxJQUFJVixPQUFPLENBQUMsQ0FBQzs7QUFFM0I7QUFDQVUsS0FBSyxDQUFDTixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyJ9