


const code = `
class Person{
}
`;

const parser = require('@babel/parser');

const ast = parser.parse(code, {
  sourceType: 'module',
  plugins: ['jsx'] // 如果代码中包含 JSX，则添加该插件
});

console.log(JSON.stringify(ast));
