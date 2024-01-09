const babel = require('@babel/core');
const traverse = require('@babel/traverse').default;
const parser = require('@babel/parser');
const generator = require('@babel/generator').default;

const jsCode = `const add = function (a) {
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




function TestOwnBinding(path) {
  path.traverse({
    Identifier(p) {
      let name = p.node.name;
      console.log('=======')
      console.log('>>> code', generator(p.scope.block).code)
      console.log(name, !!p.scope.getOwnBinding(name));
      // console.log('=======')      
    }
  });
}

traverse(ast, {
  FunctionExpression(path) {
    console.log('111')
    TestOwnBinding(path);
  },
})
