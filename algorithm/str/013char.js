

/**
 * 每个字符串出现次数或最大出现次数
 * 
 * 方法4: 使用replace方法计算替换成''，来计算差值
 * 
*/
function getMaxCount(str){

    let maxCountChart = ''
    var maxCount = -1

    while(str) {
        let char = str[0]
        let len = str.length
        let reg = new RegExp(char, 'g')
        let restStr = str.replace(reg, '')
        let max = len - restStr.length

        if (max > maxCount) {
            maxCount = max
            maxCountChart = char
        }
        str = restStr
    }

    return {
        char: maxCountChart, 
        count: maxCount
    }
}


console.log(getMaxCount('aaa111111bbcccc'))