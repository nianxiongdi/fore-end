




class EventBus {
    list;
    constructor() {
      this.list = []
    }

    // 注册
    on(type, callback) {
      // 记录当前元素的下标
      let idx = 1
      if (!this[type]) {
        this[type] = [
          callback
        ]
      }else {
        idx = this[type].push(callback)
      }
      return () => {
        return this[type].splice(idx - 1, 1)
      }
    }
 
    onOnce(type, callback) {
      // 添加id
      // 传变量
      // 函数包裹

      const wrapper = (params) => {
        callback(params)
        this.off(type, callback)
      }

      this.on(type, wrapper)
    }


    off (type, cb) {
      const callbacks = this[type]
      const idx = callbacks.includes(cb)
      if (~idx) {
        callbacks.splice(idx, 1)
      }
    }


    // 出发
    emit(type, params) {
      if (!this[type]) {
        console.warn('type对应的方法不存在');
        return 
      }

      const callbacks = this[type]
      for (let i=0; i<callbacks.length; i++) {
        callbacks[i](params)
      }
    }
}

const bus = new EventBus();

bus.on('click', () => {
    console.log(">>> click 1")
})


bus.on('click', () => {
  console.log(">>> click 2")
})


bus.onOnce('hover', () => {
  console.log(">>> 123")
})


bus.emit('hover')
bus.emit('hover')


// https://juejin.cn/post/7212456518331301944
// bus.emit('click');




// console.log(">>> EventBus", EventBus)

// https://juejin.cn/post/7072168887344693256?from=search-suggest