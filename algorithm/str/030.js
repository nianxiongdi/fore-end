

/**
 * 字符串逆序
 *  1. 转换为数组使用reverse方法
 *  2. 遍历
 *  3. 递归
 *  4. 使用call方法
 *
 *
*/
function reverseStr(str){

    return str.split('').reverse().join('')

}

function reverseStr1(str){

    let res = ''
    for (let i=str.length-1; i>=0; i--) {
        res += str[i]
    }

    return res

}

function reverseStr2(strIn, pos, strOut){

    if (pos < 0) return strOut

    strOut += strIn[pos--]

    return reverseStr2(strIn, pos, strOut)

}

function reverseStr3(str){

    return Array.prototype.slice.call(str).reverse().join('')
 
}
console.log(reverseStr('hellojavascript')) // tpircsavajolleh
console.log(reverseStr1('hellojavascript')) // tpircsavajolleh


console.log(reverseStr2('hellojavascript', 'hellojavascript'.length-1, '')) // tpircsavajolleh

console.log(reverseStr3('hellojavascript')) // tpircsavajolleh
