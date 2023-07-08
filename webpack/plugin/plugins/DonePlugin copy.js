class DonePlugin{
    apply(compiler){
        // compiler.hooks.normalModuleFactory.tap('AutoExternalPlugin', (normalModuleFactory) => {
        //     console.log('>>> normalModuleFactory',)
        //     console.log(normalModuleFactory.hooks.parser
        //         .for('javascript/auto'));
        //   });

        compiler.hooks.normalModuleFactory.tap('DonePlugin',(normalModuleFactory)=>{
            console.log('>>> 123')
 
            normalModuleFactory.hooks.factorize.tapAsync('DonePlugin',(resolveData, callback)=>{
                // console.log()
                const requireModuleName = resolveData.request;

                console.log(123, requireModuleName, Object.keys(resolveData))
                // setTimeout(() => {
                //     callback(data)
                // }, 1000)
                // callback(data)

            });
          });
        // 在 compilation 完成时执行。这个钩子 不会 被复制到子编译器。
        // compiler.hooks.done.tap('stats', (res) => {
        //     // console.log(res)
        //     console.log('>>> assddd')
        // })
    }
}

module.exports = DonePlugin;