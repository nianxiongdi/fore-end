/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {

    let xor = 0
    for(let i=0; i<nums.length; i++) {
        xor^=nums[i]
    }

    mask = 1
    while((mask & xor) === 0) {
        mask = mask << 1
    }

    let a = 0;
    let b = 0;

    for (let i=0; i<nums.length; i++) {
        if ((mask & nums[i]) === 0) {
            a^=nums[i]
        }else {
            b^=nums[i]
        }
    }

    return [a, b]

};


console.log(singleNumber( [1,2,1,3,2,5]));
console.log(singleNumber( [-1, 0]));