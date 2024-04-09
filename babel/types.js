const { default: generate } = require('@babel/generator');
const t = require('@babel/types');

// Program（程序主体）
// const myVariable = 42;
// const programNode = t.program([
//   t.variableDeclaration('const', [
//     t.variableDeclarator(
//       t.identifier('myVariable'),
//       t.numericLiteral(42)
//     )
//   ])
// ]);
// console.log(generate(programNode).code);


// VariableDeclaration（变量声明）
/*
const variableDeclarationNode = t.variableDeclaration('const', [
    t.variableDeclarator(
      t.identifier('myVariable'),
      t.numericLiteral(42)
    )
]);
console.log(generate(variableDeclarationNode).code); // const myVariable = 42;
*/

// FunctionDeclaration（函数声明）
 

// const functionDeclarationNode = t.functionDeclaration(
//   t.identifier('myFunction'), // 函数名标识符
//   [
//     t.identifier('a'), // 参数列表
//     t.identifier('b')
//   ],
//   t.blockStatement([
//     t.returnStatement(
//       t.binaryExpression('+', t.identifier('a'), t.identifier('b'))
//     )
//   ]),
//   false, // 设置为生成器函数
//   false  // 设置为异步函数
// );

// console.log(generate(functionDeclarationNode).code);


// const callExpressionNode = t.callExpression(
//     t.identifier('myFunction'),
//     [t.numericLiteral(5), t.stringLiteral('test')]
//   );
//   console.log(generate(callExpressionNode).code);
  
// const callExpressionNode = t.expressionStatement(
//    t.binaryExpression(
//         '+',
//         t.identifier('a'),
//         t.identifier('b')
//       )
//   );
  


//   const variableDeclarationNode = t.variableDeclaration('const', [
//     t.variableDeclarator(
//       t.identifier('myVariable'),
//       t.binaryExpression(
//         '+',
//         t.identifier('1'),
//         t.identifier('2')
//       )
//     )
// ]);
//   const generatedCode = generate(variableDeclarationNode).code;
//   console.log(generatedCode); // 这段代码的输出可能不会带有额外的格式化
  

// const emptyStatementNode = t.emptyStatement();
// console.log(generate(emptyStatementNode).code);


// const breakStatementNode = t.breakStatement();
// console.log(generate(breakStatementNode).code);




// 创建 SwitchCase 节点
const case1 = t.switchCase(t.numericLiteral(1), [
    t.expressionStatement(t.callExpression(t.identifier('console.log'), [t.stringLiteral('One')]))
  ]);
  
  const case2 = t.switchCase(t.numericLiteral(2), [
    t.expressionStatement(t.callExpression(t.identifier('console.log'), [t.stringLiteral('Two')]))
  ]);

  const _default = t.switchCase(null, [ //第一个参数传null为default
    t.expressionStatement(t.callExpression(t.identifier('console.log'), [t.stringLiteral('Two')]))
  ]);

  // 创建 SwitchStatement 节点并添加 SwitchCase 节点
  const switchStatementNode = t.switchStatement(
    t.identifier('variableName'), // switch (variableName)
    [
      case1,
      case2,
      _default
      // 可以继续添加更多的 SwitchCase 节点
    ]
  );
  
  console.log(generate(switchStatementNode).code);
  


  