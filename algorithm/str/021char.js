

/**
 * 每个字符串出现次数或最大出现次数
 *
 * 方法2: 通过存储是否已经存在
 *
*/
function removeDuplicateStr(str){

    let res = ''
    let obj = {}
    for (let i=0; i<str.length; i++) {
        let key = str[i]
        if (!obj[key]) {
            obj[key] = true
            res += key
        }
    }

    return res


}

console.log(removeDuplicateStr('hellojavascript')) // helojavscript