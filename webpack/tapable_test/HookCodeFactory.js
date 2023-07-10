


class HookCodeFactory {

    constructor() {
        this._args = undefined;
        this.options = undefined;
    }

    // 
    setup(instance, options) {
        instance._x = options.taps.map(i => i.fn)
    }

    create(options) {
        let fn;
        this.init(options)

        switch (options.type) {
            case 'sync': 
                fn = new Function(this.args(),
                "'use strict;'\n" + 
                this.header() + 
                this.contentWithInterceptor())
                break
        }   

        this.deinit()
        return fn
    }

    init(options) {
        this.options = options
        this._args = options._args.slice()
    }


    deinit() {
        this.options = undefined
        this._args = undefined
    }

    // 把传递的参数从 ['arg1', 'arg2'] =>  "'arg1', 'arg2'"
    args() {
        let allArgs = this._args;
        return allArgs.join(", ")
    }


    header() {
        let code = '';
        code += 'var _context;\n';
        code += 'var _x = this._x;\n';
        return code;
    }


    contentWithInterceptor() {
        return this.content()
    }

    callTapsSeries() {
        let code = '';

        for (let i= this.options.taps.length - 1; i >= 0; i--) {
            let content  =  this.callTap(i)
            code = content + code;
        }

        return code;
    }

    callTap(tapIndex) {
        let code = ''
        code += `var _fn${tapIndex} = ${this.getTapFn(tapIndex)};\n`
        let tap = this.options.taps[tapIndex]

        switch  (tap.type) {
            case 'sync':
                code += `_fn${tapIndex}(${this.args()});\n`
                break
            default:
                break;
        }

        return code;

    }

    getTapFn(idx) {
        return `_x[${idx}]`
    }


}


module.exports = HookCodeFactory;
