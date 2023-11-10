const fs = require('fs');
const { SourceMapConsumer } = require('source-map');

console.log('----------------------------------------------------------------')
console.log(__dirname)

const sourcemapFilePath = __dirname + '/bundle.js.map';
const sourcemapData = fs.readFileSync(sourcemapFilePath, 'utf-8');

const bundleFilePath = './bundle.js';
const bundleCode = fs.readFileSync(bundleFilePath, 'utf-8');

SourceMapConsumer.with(sourcemapData, null, consumer => {
  // 使用sourcemap找到bundle中特定行列对应的原始源代码位置
  const originalPosition1 = consumer.originalPositionFor({
    line: 1,
    column: 16,
  });

  console.log('Original source location 1:');
  console.log('Source file:', originalPosition1.source);
  console.log('Line:', originalPosition1.line);
  console.log('Column:', originalPosition1.column);

 
});
