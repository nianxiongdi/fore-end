const fs = require('fs');
const { SourceMapConsumer } = require('source-map');

// 读取 bundle.js 和 bundle.js.map
const generatedCode = fs.readFileSync('./bundle.js', 'utf-8');
// const generatedCode = '(()=>{"use strict";console.log(1),b})();'
const sourceMap = fs.readFileSync('./bundle.js.map', 'utf-8');
// const sourceMap = `{"version":3,"file":"bundle.js","mappings":"mBAOAA,QAAQC,IAFC,GAITC,C","sources":["webpack://loader/unknown"],"sourcesContent":["\r\n\r\n\r\n\r\n\r\nlet a  = 1;\r\n\r\nconsole.log(a)\r\n\r\nb"],"names":["console","log","b"],"sourceRoot":""}`

async function main() {
    try {
        const consumer = await SourceMapConsumer.with(sourceMap, null);

        console.log(consumer);

        
    } catch (error) {
      // Handle the error gracefully
      console.error('Error:', error);
    }
  }
  
main()
// 解析 SourceMap

// // 还原源码
// let generatedLine = 1;
// let generatedColumn = 0;
// let originalCode = '';

// generatedCode.split('').forEach((char) => {
//   if (char === '\n') {
//     generatedLine++;
//     generatedColumn = 0;
//     originalCode += char;
//   } else {
//     const originalPosition = consumer.originalPositionFor({
//       line: generatedLine,
//       column: generatedColumn,
//     });
//     if (originalPosition.source && originalPosition.line) {
//       const originalSourceContent = consumer.sourceContentFor(originalPosition.source);
//       if (originalSourceContent) {
//         const originalLineContent = originalSourceContent.split('\n')[originalPosition.line - 1];
//         originalCode += originalLineContent.slice(originalPosition.column);
//       }
//     }
//     generatedColumn++;
//   }
// });

// // 输出还原后的源码
// console.log(originalCode);

// // 释放 SourceMapConsumer
// consumer.destroy();
