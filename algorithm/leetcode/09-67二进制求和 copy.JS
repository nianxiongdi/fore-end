/**
 * @param {string} b
 * @param {string} a
 * @return {string}
 * 
示例 1：

输入:a = "11", b = "1"
输出："100"
示例 2：

输入：a = "1010", b = "1011"
输出："10101"

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/add-binary
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
 var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;

    let res = ''
    let carry = 0
    while(i>=0 || j>=0) {
        let x = +a[i] ? +a[i] : 0
        let y = +b[j] ? +b[j] : 0
        
        carry = x+y + carry

        res = (carry % 2) + res
        carry = Math.floor(carry/2)
        i--
        j--
    }

    return carry !== 0 ? carry + res : res
};


console.log(addBinary("1010", "1011"));