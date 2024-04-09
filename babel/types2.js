const { default: generate } = require('@babel/generator');
const t = require('@babel/types');

// 创建 if 语句的条件表达式：a == 1
const condition = t.binaryExpression('==', t.identifier('a'), t.numericLiteral(1));

// 创建 if 语句的主体：console.log(1)
const ifBlock = t.blockStatement([
  t.expressionStatement(
    t.callExpression(t.identifier('console.log'), [t.numericLiteral(1)])
  )
]);

// 创建 else 语句的主体：console.log('other')
const elseBlock = t.blockStatement([
  t.expressionStatement(
    t.callExpression(t.identifier('console.log'), [t.stringLiteral('other')])
  )
]);

// 创建 if 语句
const ifStatementNode = t.ifStatement(condition, ifBlock, elseBlock);

console.log(generate(ifStatementNode).code);
