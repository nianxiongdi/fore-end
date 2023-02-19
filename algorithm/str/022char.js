

/**
 * 每个字符串出现次数或最大出现次数
 *
 * 方法3: filter + indexOf
 *
*/
function removeDuplicateStr(str){

    return Array.prototype.filter.call(str, function(item, index, self) {
        return index === self.indexOf(item)
    }).join('')


}

console.log(removeDuplicateStr('hellojavascript')) // helojavscript