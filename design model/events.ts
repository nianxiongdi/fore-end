// https://www.thisdot.co/blog/how-to-implement-an-event-bus-in-typescript


type Callback = (params?: Obj) => void

type Obj = Record<string, any> 

interface Handlers {
  [key: string]: Callback []
}

interface IEventBus {
  on(type: string, callback: Callback): Callback;
  onOnce(type: string, callback?: Callback): void;
  off(type: string, callback?: Callback): void;
  emit(type: string, params?: Obj): void;
}

class EventBus implements IEventBus{
    private list: Handlers;
    private static instance?: EventBus = undefined;

    constructor() {
      this.list = {}
    }

    // 注册
    on(type: string, callback: Callback): Callback{
      // 记录当前元素的下标
      let idx = 1
      if (!this.list[type]) {
        this.list[type] = [
          callback
        ]
      }else {
        idx = this.list[type].push(callback)
      }
      return () => {
        return this.list[type].splice(idx - 1, 1)
      }
    }

    public static getInstance(): EventBus {
      if (this.instance === undefined) {
        this.instance = new EventBus();
      }
  
      return this.instance;
    }
 
    onOnce(type: string, callback: Callback) {
      // 添加id
      // 传变量
      // 函数包裹

      const wrapper: Callback = (params?: Obj) => {
        callback(params)
        // 注意 这里要写wrapper, 不能写callback
        this.off(type, wrapper)
      }

      this.on(type, wrapper)
    }


    off (type: string, cb: Callback) {
      const callbacks = this.list[type]
      console.log(">>> this.list[type]", this.list[type])
      const idx = callbacks.indexOf(cb)
      console.log(idx)
      if (~idx) {
        callbacks.splice(idx, 1)
      }
    }


    // 出发
    emit(type: string, params?: Obj) {
      if (!this.list[type]) {
        console.warn('type对应的方法不存在');
        return 
      }

      const callbacks = this.list[type]
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

// https://segmentfault.com/a/1190000041538256
// https://segmentfault.com/a/1190000041538256
// https://www.cnblogs.com/azoux/p/16782946.html
// https://github.com/metroluffy/fe-learning/issues/15
// https://www.thisdot.co/blog/how-to-implement-an-event-bus-in-typescript
// https://www.thisdot.co/blog/how-to-implement-an-event-bus-in-typescript