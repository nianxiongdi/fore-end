/**
 * @param {string} b
 * @param {string} a
 * @return {string}
 */
 var addBinary = function(a, b) {

    let i = a.length - 1
    let j = b.length - 1

    let res = ''
    let carry = 0 // 保存当前位结果
    while( i>=0 || j>=0 ) {
        
        let x = i>=0 ? +a[i] : 0
        let y = j>=0 ? +b[j] : 0

        let sum = x^y^carry // 理解 不同位1 相同位0
        carry = (x&y) | (x&carry) | (y&carry)
        res = sum + res
        i--;
        j--;
    }

    return carry !== 0 ? carry+res : res

};


console.log(addBinary("1010", "1011"));