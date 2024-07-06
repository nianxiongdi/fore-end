
/**
 * 洋葱模型
*/
class TaskPro{
    constructor() {
        this.list = []
    }

    addTask(callback) {
        this.list.push(callback)
    }

    run() {
        this.list.forEach(async ( cb) => {
            cb(function() {
            })
        })
    }
}

const t = new TaskPro()


t.addTask(async (next) => {
    console.log('start');
    await next()
    console.log('>>> 1')
})


t.addTask(() => {
    console.log(2)
})

t.addTask(() => {
    console.log(3)
})

t.run()
