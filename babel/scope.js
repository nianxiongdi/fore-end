const babel = require('@babel/core');
const parser = require('@babel/parser');
// const { default: generate } = require('@babel/generator');
const t = require('@babel/types');
const traverse = require("@babel/traverse").default;


const code = `
function exampleFunction() {
  const a = 10;
  console.log(a);
}
`;
const ast = parser.parse(code, { sourceType: 'module' });

traverse(ast, {
  VariableDeclarator(path) {
    console.log(path.scope.block); // 输出当前节点的作用域信息
  },
});
