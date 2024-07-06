// https://www.thisdot.co/blog/how-to-implement-an-event-bus-in-typescript
var EventBus = /** @class */ (function () {
    function EventBus() {
        this.list = {};
    }
    // 注册
    EventBus.prototype.on = function (type, callback) {
        var _this = this;
        // 记录当前元素的下标
        var idx = 1;
        if (!this.list[type]) {
            this.list[type] = [
                callback
            ];
        }
        else {
            idx = this.list[type].push(callback);
        }
        return function () {
            return _this.list[type].splice(idx - 1, 1);
        };
    };
    EventBus.prototype.onOnce = function (type, callback) {
        // 添加id
        // 传变量
        // 函数包裹
        var _this = this;
        var wrapper = function (params) {
            callback(params);
            _this.off(type, callback);
        };
        this.on(type, wrapper);
    };
    EventBus.prototype.off = function (type, cb) {
        var callbacks = this.list[type];
        var idx = callbacks.indexOf(cb);
        if (~idx) {
            callbacks.splice(idx, 1);
        }
    };
    // 出发
    EventBus.prototype.emit = function (type, params) {
        if (!this.list[type]) {
            console.warn('type对应的方法不存在');
            return;
        }
        var callbacks = this.list[type];
        for (var i = 0; i < callbacks.length; i++) {
            callbacks[i](params);
        }
    };
    return EventBus;
}());
var bus = new EventBus();
bus.on('click', function () {
    console.log(">>> click 1");
});
bus.on('click', function () {
    console.log(">>> click 2");
});
bus.onOnce('hover', function () {
    console.log(">>> 123");
});
bus.emit('hover');
bus.emit('hover');
// https://juejin.cn/post/7212456518331301944
// bus.emit('click');
// console.log(">>> EventBus", EventBus)
// https://juejin.cn/post/7072168887344693256?from=search-suggest
