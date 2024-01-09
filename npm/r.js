const babel = require('@babel/core');
const traverse = require('@babel/traverse').default;
const parser = require('@babel/parser');

// ... rest of the code remains the same ...

// 示例代码
const code = `
function exampleFunction() {
  const a = 10;
  let b = 20;
  var c = 30;
  console.log(a + b + c);
}
`;

// 解析代码为 AST
const ast = parser.parse(code, {
  sourceType: 'module',
});

// 遍历 AST
traverse(ast, {
  FunctionDeclaration(path) {
    // 获取当前节点所在作用域的所有绑定
    const bindings = path.scope.bindings;
    console.log('All bindings in current scope:', bindings);

    // 遍历并输出绑定的详细信息
    for (const bindingName in bindings) {
      // if (bindings.hasOwnProperty(bindingName)) {
        const binding = bindings[bindingName];
        console.log(`Binding name: ${bindingName}`);
        console.log('Binding details:', binding);
      // }
    }
  },
});

// 输出所有绑定的详细信息
