const babel = require('@babel/core');
const traverse = require('@babel/traverse').default;
const parser = require('@babel/parser');
const generator = require('@babel/generator').default;

const jsCode = `function fun(a) {
  a = 400;
  b = 300;
  let e = 700;

  function demo() {
    let d = 600;
  }

  demo();
  return a + a + b + 1000 + obj.name;
}`;

const ast = parser.parse(jsCode, {
  sourceType: 'module',
});

traverse(ast, {
  FunctionDeclaration(path) {
    console.log('\n\n这里是函数', path.node.id.name + '()');
    path.scope.dump();
  },
  Identifier(path) {
    // console.log(123)
    if (path.node.name === 'd') {
      // console.log(path.scope.block)
      const blockCode = generator(path.scope.block).code;
      // console.log('Block scoped code for identifier "e":', blockCode);
    }
  },
});
