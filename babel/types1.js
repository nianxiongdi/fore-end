const { default: generate } = require('@babel/generator');
const t = require('@babel/types');

// 创建 case 1 的 SwitchCase 节点
const case1 = t.switchCase(
  t.numericLiteral(1), // 表示 case 1
  [
    t.expressionStatement(
      t.callExpression(t.identifier('console.log'), [t.stringLiteral('Case 1')])
    )
  ]
);

// 创建 case 2 的 SwitchCase 节点
const case2 = t.switchCase(
  t.numericLiteral(2), // 表示 case 2
  [
    t.expressionStatement(
      t.callExpression(t.identifier('console.log'), [t.stringLiteral('Case 2')])
    )
  ]
);

// 创建 default 的 SwitchCase 节点
const defaultCase = t.switchCase(
  null, // 表示 default
  [
    t.expressionStatement(
      t.callExpression(t.identifier('console.log'), [t.stringLiteral('Default case')])
    )
  ]
);

// 创建 SwitchStatement 节点并添加 SwitchCase 节点
const switchStatementNode = t.switchStatement(
  t.identifier('variableName'), // switch (variableName)
  [
    case1,
    case2,
    defaultCase // 添加 default 分支
  ]
);

console.log(generate(switchStatementNode).code);


switch(1) {

}
