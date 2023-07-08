const HtmlWebpackPlugin = require('html-webpack-plugin');
const { options } = require('less');
const { ExternalModule  } = require('webpack')



function importHandler(parser) {
    parser.hooks.import.tap('ExternalsWebpackPlugin', (statement, source) => {
        // 解析当前模块中的import语句
        if (this.libraryList.includes(source)) {
            this.usedLibrary.add(source);
        }
    });
}

function requireHandler(parser) {
    // 解析当前模块中的require语句
    // console.log(parser.hooks.call.for('require'));
    parser.hooks.call.for('require').tap('ExternalsWebpackPlugin', (expression) => {
        console.log('>>>>')
        const moduleName = expression.arguments[0].value;
        // 当require语句中使用到传入的模块时
        if (this.libraryList.includes(moduleName)) {
         this.usedLibrary.add(moduleName);
        }
    });
}

 class ExternalsWebpackPlugin{
    constructor(options) {
        this.options = options

         // 保存参数传入的所有需要转化CDN外部externals的库名称
        this.libraryList = Object.keys(options);

        // 分析依赖引入 保存代码中使用到需要转化为外部CDN的库
        this.usedLibrary = new Set()
    }

    apply(compiler){

        compiler.hooks.normalModuleFactory.tap('ExternalsWebpackPlugin',(normalModuleFactory)=>{

            // 3. 去除无用的引用
            // 在编译模块时触发 将模块变成为AST阶段调用
            normalModuleFactory.hooks.parser
                .for('javascript/auto')
                .tap('ExternalsWebpackPlugin', (parser) => {
                    // 当遇到模块引入语句 import 时
                    importHandler.call(this, parser);
                    // 当遇到模块引入语句 require 时
                    requireHandler.call(this, parser);
                });

            // 2. 在模块内添加引用
            // 在初始化解析模块之前调用
            normalModuleFactory.hooks.factorize.tapAsync('ExternalsWebpackPlugin',(resolveData, callback)=>{
                // console.log(resolveData)
                // 获取rquire里面的key
                const requireModuleName = resolveData.request;

                // console.log(this.libraryList.includes(requireModuleName))
                // 查看是否在配置列表中
                if (this.libraryList.includes(requireModuleName)) {
                    callback(null, new ExternalModule(
                        requireModuleName,
                        'window',
                        'requireModuleName'      
                    ))
                }else {
                    callback()
                }
      
 
            });
        });


        compiler.hooks.compilation.tap('ExternalsWebpackPlugin', (compilation) => {
            console.log('The compiler is starting a new compilation...')
      
            // Static Plugin interface |compilation |HOOK NAME | register listener 
            HtmlWebpackPlugin.getHooks(compilation).alterAssetTags.tapAsync(
              'ExternalsWebpackPlugin', // <-- Set a meaningful name here for stacktraces
              (htmlPluginData, cb) => {
                const { options, usedLibrary } = this
                // console.log('-------------------------', this.options);
                // console.log()
                // console.log(JSON.stringify(htmlPluginData.assetTags.scripts));
                // const scriptUrls = Object.values(this.options).map(item => item.url)
                let scriptUrls =Object.keys(options).filter(key=>usedLibrary.has(key)).map(key=>options[key].url);  
                scriptUrls.forEach(url => {
                    htmlPluginData.assetTags.scripts.unshift({
                        "tagName": "script",
                        "voidTag": false,
                        "meta": {
                            "plugin": "html-webpack-plugin"
                            },
                        "attributes": {
                            "defer": false,
                            "src": url
                        }
                    })
                } )
                cb(null, htmlPluginData)
              }
            )
        })
    }
}

module.exports = ExternalsWebpackPlugin;

// https://juejin.cn/post/7047777251949019173


 