let core = require('@babel/core');
let types = require('babel-types');
let  BabelPluginTransformEs2015ArrowFunctions = require('@babel/plugin-transform-arrow-functions');
const sourceCode = `
const sum = (a,b)=>{
    console.log(this);
    return a+b;
}
`;
//babel插件其实是一个对象，它会有一个visitor访问器
let BabelPluginTransformEs2015ArrowFunctions2 = {
    //每个插件都会有自己的访问器
    visitor:{
        //属性就是节点的类型，babel在遍历到对应类型的节点的时候会调用此函数
        ArrowFunctionExpression(nodePath){//参数是节点的数据
            let node = nodePath.node;//获取 当前路径上的节点
            //处理this指针的问题
            hoistFunctionEnvironment(nodePath);
            node.type = 'FunctionExpression';
        }
    }
}
// NodePath的属性和方法可参考 packages/babel-traverse/src/path/index.ts
function hoistFunctionEnvironment(fnPath){
   const thisEnvFn = fnPath.findParent(p=>{
    
       //是一个函数，不能是箭头函数 或者 是根节点也可以
       return (p.isFunction() && !p.isArrowFunctionExpression())||p.isProgram()
   });
   //找一找当前作用域哪些地方用到了this的路径
   let thisPaths = getScopeInfoInformation(fnPath);
   //声明了一个this的别名变量，默认是_this __this
   let thisBinding = '_this';
   if(thisPaths.length>0){
       //在thisEnvFn的作用域内添加一个变量，变量名_this,初始化的值为this
    thisEnvFn.scope.push({
        id:types.identifier(thisBinding),
        init:types.thisExpression()
    });
    thisPaths.forEach(item=>{
        //创建一个_this的标识符  
        let thisBindingRef = types.identifier(thisBinding);
        //把老的路径 上的节点替换成新节点
        item.replaceWith(thisBindingRef);
    });
   }
}
function getScopeInfoInformation(fnPath){
  let thisPaths = [];
  //遍历当前path所有的子节点路径，
  //告诉 babel我请帮我遍历fnPath的子节点，遇到ThisExpression节点就执行函数，并且把对应的路径传进去 
  fnPath.traverse({
    ThisExpression(thisPath){
        thisPaths.push(thisPath);
    }
  });
  return thisPaths; 
}

let targetCode = core.transform(sourceCode,{
    plugins:[BabelPluginTransformEs2015ArrowFunctions]
});
console.log(targetCode.code);
