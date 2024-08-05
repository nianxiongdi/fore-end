"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var Person = /*#__PURE__*/function () {
  function Person() {
    (0, _classCallCheck2["default"])(this, Person);
  }
  (0, _createClass2["default"])(Person, [{
    key: "sayname",
    value: function sayname() {
      return 'name';
    }
  }]);
  return Person;
}();
var john = new Person();
console.log(john);
Promise.resolve(1);
function fun() {
  return _fun.apply(this, arguments);
}
function _fun() {
  _fun = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _fun.apply(this, arguments);
}
;
fun();
