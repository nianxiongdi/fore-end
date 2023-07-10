
// 定义当前任务的状态
const QUEUED_STATE = 0; // 未开始
const PROCESSING_STATE = 1; // 进行中
const DONE_STATE = 2; // 完成


/**
 * 任务队列
*/
class ArrayQueue {

    constructor(items) {
        this._list = items ? Array.from(items) : [];
    }


    enqueue(item) {
        this._list.push(item);
    }


    dequeue() {
        return this._list.shift();
    }


}

/**
 * 队列的信息
*/
class AsyncQueueEntry {

    constructor(item, callback) {

		this.item = item;
		/** @type {typeof QUEUED_STATE | typeof PROCESSING_STATE | typeof DONE_STATE} */
		this.callback = callback;
		/** @type {Callback<R>[] | undefined} */
		this.callbacks = undefined;
    // 记录当前任务的状态
    this.state = QUEUED_STATE;
		this.result = undefined;
		/** @type {WebpackError | undefined} */
		this.error = undefined;
    }

}


class AsyncQueue {

    constructor({ name, parallelism, processor, getKey }) {
        this._name = name;
        this._parallelism = parallelism;
        this._processor = processor;
        this._getKey = getKey || /** @type {(T) => K} */ (item => /** @type {any} */ (item));
        
        // 存在任务的队列
        this._queued = new ArrayQueue();

        // 当前并发任务
        this._activeTasks = 0;

        // 保存当前队列中所有已经执行过的任务
        this._entries = new Map();
    }

    add (item, callback) {

        // 获取当前添加的唯一key
        const key = this._getKey(item);
        const entry = this._entries.get(key);
        if (entry !== undefined) {
          
          if (entry.state === DONE_STATE) {
            process.nextTick(() => callback(entry.err, entry.result));
          } else if (entry.callbacks === undefined) {
            entry.callbacks = [callback]
          } else {
            entry.callbacks.push(callback)
          }
          return
        }
        const newEntry = new AsyncQueueEntry(item, callback);
        this._entries.set(key, newEntry)

        this._queued.enqueue(newEntry);

        setImmediate(this._ensureProcessing.bind(this));
    }

    _ensureProcessing() {
        while (this._activeTasks < this._parallelism) {
            const entry = this._queued.dequeue();
            if (!entry) break 
            this._activeTasks++
            // 修改为任务为进行中
            entry.state = PROCESSING_STATE
            // 开始任务
            this._startProcessing(entry);
        }
    }

    _startProcessing(entry) {
        this._processor(entry.item, (e, r) => {
            if (e) {
                this._handleResult(entry, 
                new Error(`AsyncQueue(${this.name} processor error.)`));
            }
            this._handleResult(entry, e, r);
        })
    }

    // 处理结果
    _handleResult (entry, err, result) {
      const callback = entry.callback;
      const callbacks = entry.callbacks;
  
      entry.callback = undefined;
      entry.callbacks = undefined;
      entry.result = result;
      entry.error = err;

      this._activeTasks--;
      callback(err, result); // 当调度器任务完成时
      if (callbacks !== undefined) {
        for (const callback of callbacks) {
          callback(err, result);
        }
      }

      // 当任务完成的时候  这里还需要开启下一个任务
      setImmediate(this._ensureProcessing.bind(this));
    }
}


 
function processor(item, callback) {

  setTimeout(() => {
    // item.number = Math.random();
    item.deal = item.key + '==>被处理了'
    callback(null, item);
  
  },2000);
}

const queue = new AsyncQueue({
  name: 'addNumber',
  processor,
  parallelism: 2,
  getKey: (item) => item.key,
});



queue.add({ key: 'item1', name: '19Qingfeng' }, (err, result) => {
  console.log('item1处理后的结果', result);
});
  
queue.add({ key: 'item2', name: '19Qingfeng' }, (err, result) => {
  console.log('item2处理后的结果', result);
});

queue.add({ key: 'item3', name: '19Qingfeng' }, (err, result) => {
  console.log('item3处理后的结果', result);
});

queue.add({ key: 'item1', name: '19Qingfeng' }, (err, result) => {
    console.log('item1处理后的结果', result);
});
    