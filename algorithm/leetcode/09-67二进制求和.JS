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
        
        if (i >=0) {
            carry += +a[i]
            i--
        }
        if (j >=0) {
            carry += +b[j]
            j--
        }

        res = (carry%2) + res

        carry = Math.floor(carry/2)

    }

    return carry !== 0 ? carry+res : res

};



console.log(addBinary('11', '11'));