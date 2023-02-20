/**
 * @param {number[]} nums
 * @return {number[][]}
 */


/*
1.  满足下标不相等
2. 且第三个值要存在 nums中
3.  不重复

*/

 var threeSum = function(nums) {
    
    let arrs = []
    let map = {}

    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            let three = 0 - (nums[i] + nums[j])
            let threeIndex = nums.indexOf(three )
            console.log('>>> three', three, nums[threeIndex] , nums[i] , nums[j]);
            if(!~threeIndex ||  i === j || j=== threeIndex || i === threeIndex) continue 

            // console.log(map[0 - (nums[i] - nums[j])], Object.hasOwnProperty.call(map, map[0 - (nums[i] - nums[j])]));
            // console.log(nums.indexOf(three ), map[three] , nums[i] , nums[j]);
            if ((nums[threeIndex] + nums[i] + nums[j]) === 0) {
                // console.log([nums[i], nums[j], nums[threeIndex]])
                

                const isExsit = arrs.some( arr =>{
                    let one = arr.indexOf(nums[i])
                    let two = arr.indexOf(nums[j], nums[i] === nums[j] ? one+1 : 0) 
                    return  ~one && ~two && one !== two 
                })



                !isExsit && arrs.push([nums[i], nums[j], nums[threeIndex]])
                // 去重 麻烦
            } else {
                // console.log(three*-1);
                // console.log(three );
                map[three] = threeIndex 
            }
        }
    }

 

    return arrs
};


// nums = [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]
// nums = [0,0,0,0]


// 该代码存在超市问题

// todo 优化

try {
    console.log(threeSum(nums))
} catch (error) {
    console.log(error);
}