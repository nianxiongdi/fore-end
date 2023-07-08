class DonePlugin{
    apply(compiler){
        // 在 compilation 完成时执行。这个钩子 不会 被复制到子编译器。
        // compiler.hooks.done.tap('stats', (res) => {
        //     // console.log(res)
        //     console.log('>>> assddd')
        // })
    }
}

module.exports = DonePlugin;

// https://juejin.cn/post/7047777251949019173


 