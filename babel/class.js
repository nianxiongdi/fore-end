//核心库，提供了语法树的生成和遍历的功能
let babel = require('@babel/core');
//工具类，可能帮我们生成相应的节点
let t = require('babel-types');
//babel_plugin-transform-classes
let TransformClasses = require('@babel/plugin-transform-classes');
let es6Code = `class Person{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}
`;
let transformClasses2 = {
    visitor: {
        ClassDeclaration(nodePath) {
            let {node} = nodePath;
            let id = node.id;//{type:'Identifier',name:'Person'}
            console.log(id);
            let methods = node.body.body;
            let nodes = [];
            methods.forEach(classMethod=>{
                if(classMethod.kind === 'constructor'){
                    let constructorFunction = t.functionDeclaration(
                        id, classMethod.params, classMethod.body,
                         classMethod.generator, classMethod.async);
                         nodes.push(constructorFunction);
                }else{
                    let prototypeMemberExpression = t.memberExpression(id, t.identifier('prototype'));
                    let keyMemberExpression = t.memberExpression(prototypeMemberExpression, classMethod.key);
                    let memberFunction = t.functionExpression(
                        id, classMethod.params, classMethod.body,
                         classMethod.generator, classMethod.async);
                    let assignmentExpression=t.assignmentExpression("=", 
                    keyMemberExpression,
                    memberFunction);
                    nodes.push(assignmentExpression);
                }
            });
            if(nodes.length==1){
                nodePath.replaceWith(nodes[0]);
            }else if(nodes.length>1){
                nodePath.replaceWithMultiple(nodes);
            }
        }
    }
}


let es5Code = babel.transform(es6Code,{
    plugins:[transformClasses2]
});
console.log(es5Code.code);

// https://www.cnblogs.com/eliwang/p/17153663.html