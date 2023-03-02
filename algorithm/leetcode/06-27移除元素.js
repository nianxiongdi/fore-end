/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 
 * 
 * 输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/remove-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
 var removeElement = function(nums, val) {
    
    
    let low = 0; // 记录不重复的下标
    let fast = 0 //进行遍历
    
    while (fast < nums.length) {

        if (nums[fast] !== val){
            nums[low++] = nums[fast]
        }
        fast++
        
    }

    return low
};