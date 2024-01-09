
let babel = require('@babel/core');

function loader(source){
    let options = {
        // presets: ['@babel/preset-env'], // 配置插件  
        // sourceMaps: true
        filename:this.resourcePath.split('/').pop()
    }
    let { code, map, ast } = babel.transform(source, options)
    
    return this.callback(null, code, map)
} 


module.exports = loader