
const Hook = require('./Hook')


const HookCodeFactory = require('./HookCodeFactory')

class SyncHookCodeFactory extends HookCodeFactory {

    // constructor() {

    // }

    content() {
        return this.callTapsSeries()
    }

}


const factory = new SyncHookCodeFactory()

function COMPILE (options) {
    factory.setup(this, options)
    return factory.create(options)
}

function SyncHook (args = [], name = undefined) {
    let hook = new Hook(args, name)
    hook.compile = COMPILE 
    return hook
}


SyncHook.prototype = null


module.exports = SyncHook