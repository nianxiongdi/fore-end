

/**
 * 每个字符串出现次数或最大出现次数
 *
 * 方法2: 排序后使用lastIndexOf
 * 
*/
function getMaxCount(str){

    let maxCountChart = ''
    var maxCount = -1

    str = str.split('').sort().join('')
    for (let i=0; i<str.length; i++) {
        let lastIndex = str.lastIndexOf(str[i])
        let charLen = lastIndex - i + 1
        if (charLen > maxCount) {
            maxCount = charLen
            maxCountChart = str[i]
        }
        // 减少循环次数
        i = lastIndex
    }

    return {
        char: maxCountChart, 
        count: maxCount
    }
}


console.log(getMaxCount('aaa111111bbcccc'))