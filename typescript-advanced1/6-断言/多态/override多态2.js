"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Vechile = /** @class */ (function () {
    // 品牌 车牌号 租赁天数 押金
    function Vechile(brand, vechileNo, days, deposit) {
        this.brand = brand;
        this.vechileNo = vechileNo;
        this.days = days;
        this.deposit = deposit;
        this.total = 0;
    }
    Vechile.prototype.calculate = function () {
        this.total = this.days * 100;
    };
    Vechile.prototype.payDesposit = function () {
        console.log(this.brand + " 车牌号为：" + this.vechileNo + " 开始被租");
    };
    Vechile.prototype.price = function () {
        console.log("350 元");
    };
    Vechile.count = 3;
    return Vechile;
}());
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bus.prototype.price = function () {
        console.log("320 元");
    };
    return Bus;
}(Vechile));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Truck.prototype.price = function () {
        console.log("310 元");
    };
    return Truck;
}(Vechile));
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.price = function () {
        console.log("300 元");
    };
    return Car;
}(Vechile));
// 多态
var Customer1 = /** @class */ (function () {
    function Customer1() {
    }
    Customer1.prototype.rentVechile = function (vechile) {
        vechile.price();
    };
    return Customer1;
}());
var customer = new Customer1();
var car = new Car("普拉多", "京22222", 3, 10000);
var bus = new Bus("bus", "京11222", 3, 10000);
var truck = new Truck("普拉多", "京22222", 3, 10000);
customer.rentVechile(car);
customer.rentVechile(bus);
customer.rentVechile(truck);
