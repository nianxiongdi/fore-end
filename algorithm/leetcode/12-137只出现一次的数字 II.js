/**
 * @param {number[]} nums
 * @return {number}
    示例 1：
        输入：nums = [2,2,3,2]
        输出：3
        示例 2：

    输入：nums = [0,1,0,1,0,1,99]
    输出：99

 */
var singleNumber = function(nums) {
    


    let res = 0
    for (let i=0; i<32; i++) {
        let carry = 0

        // 取出每一位
        // 判断个数是1还是0
        for (let j=0; j<nums.length; j++){
            carry += (nums[j]>>i)&1
        }

        // 这里不能用 Math.pow 会溢 结果错误
        res += carry % 3 !== 0 ? 1<<i : 0 


    }

    return res
};
// nums = [0,1,0,1,0,1,99]
nums = [-2,-2,1,1,4,1,4,4,-4,-2]

console.log(singleNumber(nums));