
/*
Object.is 方法的比较规则如下：

如果 value1 和 value2 是同一个对象引用（即指向相同的内存地址），则返回 true。
如果 value1 和 value2 都是 NaN，则返回 true。注意：NaN 不等于自身，所以这是 Object.is 方法的一个特殊之处。
如果 value1 和 value2 是相同的非零数值，返回 true。例如，Object.is(0, -0) 返回 false，而 Object.is(-0, -0) 返回 true。
对于其他情况，Object.is 执行与 === 严格相等运算符相同的操作，返回结果相同。

*/

function isEqual(o1, o2) {
    // 如果两个对象引用相同，则认为它们相等
    if (o1 === o2) {
      return true;
    }
  
    // 如果两个对象类型不同，或者其中一个为 null，则认为它们不相等
    if (typeof o1 !== 'object' || o1 === null || typeof o2 !== 'object' || o2 === null) {
      return false;
    }
  
    // 获取两个对象的所有属性
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);

    // symbol
    Object.getOwnPropertySymbols(o1)

    // 如果两个对象属性数量不同，则认为它们不相等
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    // 递归比较两个对象的属性值
    for (const key of keys1) {
      if (!isEqual(o1[key], o2[key])) {
        return false;
      }
    }





  
    return true;
  }
  
  // 示例
  const obj1 = { a: 1, b: { c: 2 } };
  const obj2 = { a: 1, b: { c: 2 } };
  const obj3 = { a: 1, b: { c: 3 } };
  
  console.log(isEqual(obj1, obj2)); // Output: true
  console.log(isEqual(obj1, obj3)); // Output: false
  