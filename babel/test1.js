const { parseExpression } = require('@babel/helper-string-parser');

const str = '(x + 5) * 2'; // 要解析的字符串表达式

try {
  const ast = parseExpression(str);

  console.log('Parsed AST:');
  console.log(JSON.stringify(ast, null, 2));
} catch (error) {
  console.error('Failed to parse expression:', error);
}
