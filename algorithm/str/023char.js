

/**
 * 每个字符串出现次数或最大出现次数
 *
 * 方法4: set + 扩展运算符
 *
*/
function removeDuplicateStr(str){

    return [...new Set(str)].join('')


}

console.log(removeDuplicateStr('hellojavascript')) // helojavscript