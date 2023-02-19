

/**
 * 每个字符串出现次数或最大出现次数
 * 
 * 方法3: 排序后使用正则分割 match
 * 
*/
function getMaxCount(str){

    let maxCountChart = ''
    var maxCount = -1

    str = str.split('').sort().join('')
    let arr = str.match(/(\w)\1+/g)
    
    for (let i=0; i<arr.length; i++) {
        let chars = arr[i]
        if (chars.length > maxCount) {
            maxCount = chars.length
            maxCountChart = chars[0]
        }
    }

    return {
        char: maxCountChart, 
        count: maxCount
    }
}


console.log(getMaxCount('aaa111111bbcccc'))