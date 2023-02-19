

/**
 * 每个字符串出现次数或最大出现次数
 * 
 * 方法1: 通过indexOf 或 includes
 * 方法2: 通过存储是否已经存在
 * 方法3: filter + indexOf
 * 方法4: set + 扩展运算符
 * 
*/
function removeDuplicateStr(str){

    let res = ''
    for (let i=0; i<str.length; i++) {
        if (!res.includes(str[i])) {
            res += str[i]
        }
    }

    return res


}


console.log(removeDuplicateStr('hellojavascript'))