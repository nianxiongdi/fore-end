const { default: generate } = require('@babel/generator');
const t = require('@babel/types');

// 创建 superClass 的节点，例如父类的标识符
const superClass = t.identifier('ParentClass');

// 创建类的方法：method() { console.log('Hello from method'); }
const classMethod = t.classMethod(
  'method', // 方法名
  t.identifier('method'), // 方法标识符
  [], // 方法参数列表为空
  t.blockStatement([
    t.expressionStatement(
      t.callExpression(t.identifier('console.log'), [t.stringLiteral('Hello from method')])
    )
  ])
);

// 创建类的节点：class MyClass extends ParentClass { method() { console.log('Hello from method'); } }
const classNode = t.classDeclaration(
  t.identifier('MyClass') // 类名
//   t.classBody([classMethod]), // 类的方法列表
//   superClass // 设置 superClass
);

console.log(generate(classNode).code);
