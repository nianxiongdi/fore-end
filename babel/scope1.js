const babel = require('@babel/core');
const traverse = require('@babel/traverse').default;
const parser = require('@babel/parser');

const code = `
function exampleFunction() {
  const x = 10;
  console.log(x);
  console.log(x + 5);
}
`;

const ast = parser.parse(code, { sourceType: 'module' });

const bindingsMap = new Map();

traverse(ast, {
  VariableDeclaration(path) {
    path.node.declarations.forEach(declaration => {
      const name = declaration.id.name;
      const binding = path.scope.getBinding(name);

      if (binding) {
        bindingsMap.set(name, binding);
      }
    });
  },
});

const variableNameToCheck = 'x'; // 要检查引用的变量名

if (bindingsMap.has(variableNameToCheck)) {
  const binding = bindingsMap.get(variableNameToCheck);
  const references = binding.referencePaths;

  console.log(`References to "${variableNameToCheck}" found at:`);
  references.forEach(reference => {
    const { start, end } = reference.node.loc;
    console.log(`- Line ${start.line}, Column ${start.column} to Line ${end.line}, Column ${end.column}`);
  });
} else {
  console.log(`Variable "${variableNameToCheck}" is not found.`);
}
