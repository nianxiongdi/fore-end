function getValue(obj, keyPath, defaultValue = undefined, isSafeValue = true) {
  if (!obj || typeof obj !== "object") return defaultValue;

  const keys = keyPath.split(/\.|\[(\d+)\]/).filter(Boolean); // 处理嵌套路径
  let result = obj;

  for (const key of keys) {
    if (isSafeValue) {
      // 严格模式：检查属性是否存在
      if (result && Object.prototype.hasOwnProperty.call(result, key)) {
        result = result[key];
      } else {
        return defaultValue;
      }
    } else {
      // 宽松模式：直接检查值
      result = result ? result[key] : undefined;
      if (result === undefined) return defaultValue;
    }
  }

  return result !== undefined ? result : defaultValue;
}

// 示例数据
const data = {
  id: 0, // 值为 0
  title: "",
  children: [
    { id: 2, title: "title2", value: 0 },
    { id: 3, title: "title3", value: false }
  ]
};

// 示例用法
console.log(getValue(data, "id", "default", true)); // 输出: 0（严格模式）
console.log(getValue(data, "id", "default", false)); // 输出: 0（宽松模式）

console.log(getValue(data, "children[1].value", "default", true)); // 输出: false
console.log(getValue(data, "children[1].value", "default", false)); // 输出: false

console.log(getValue(data, "children[2].value", "default", true)); // 输出: default（路径不存在）
console.log(getValue(data, "children[2].value", "default", false)); // 输出: default（路径不存在）
