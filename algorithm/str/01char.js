

/**
 * 每个字符串出现次数或最大出现次数
 * 
 * 方法1: 遍历每一个字符
 * 方法2: 排序后使用lastIndexOf
 * 方法3: 排序后使用正则分割 match
 * 方法4: 使用replace方法计算替换成都
 * 
*/
function getMaxCount(str){

    let maxCountChart = ''
    var maxCount = -1
    let obj = {}

    for (let i=0; i<str.length; i++) {
        let key = str[i]
        if (!obj[key]) {
            obj[key] = 1
        }else {
            obj[key]++
        }
    }

    for (let key in obj) {
        if (obj[key] > maxCount) {
            maxCountChart = key
            maxCount = obj[key]
        }
    }

    return {
        char: maxCountChart, 
        count: maxCount
    }
}


console.log(getMaxCount('aaa111111bbcccc'))