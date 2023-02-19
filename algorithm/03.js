
    //  https://leetcode.cn/problems/maximum-subarray/solution/zui-da-zi-xu-he-cshi-xian-si-chong-jie-fa-bao-li-f/
    function maxSubArray(nums) {
        //类似寻找最大最小值的题目，初始值一定要定义成理论上的最小最大值
        let result = -Number.MAX_VALUE;
        let numsSize = nums.length
        result = maxSubArrayHelper(nums, 0, numsSize - 1);
        return result;
    }

    function maxSubArrayHelper(nums, left, right) {
        if (left == right) {
            return nums[left];
        }
        let mid = Math.floor((left + right) / 2);
        let leftSum = maxSubArrayHelper(nums, left, mid);
        //注意这里应是mid + 1，否则left + 1 = right时，会无线循环
        let rightSum = maxSubArrayHelper(nums, mid + 1, right);
        let midSum = findMaxCrossingSubarray(nums, left, mid, right);
        let result = Math.max(midSum, leftSum, rightSum);
        return result;
    }

    function findMaxCrossingSubarray(nums,  left, mid, right)
    {
        let leftSum = -Number.MAX_VALUE;;
        let sum = 0;
        for (let i = mid; i >= left; i--)
        {
            sum += nums[i];
            leftSum = Math.max(leftSum, sum);
        }

        let rightSum =  -Number.MAX_VALUE;;
        sum = 0;
        //注意这里i = mid + 1，避免重复用到nums[i]
        for (let i = mid + 1; i <= right; i++)
        {
            sum += nums[i];
            rightSum = Math.max(rightSum, sum);
        }
        return (leftSum + rightSum);
    }



    console.log(maxSubArray([2, 3,  2, 4,  -6]))

 