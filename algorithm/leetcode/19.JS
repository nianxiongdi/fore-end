function majorityElement(nums) {
    let ans=nums[0], count=0;
    for(let i=0; i<nums.length; i++){
        if(count==0) ans=nums[i];
        if(nums[i]==ans)count++;
        else count--;
    }
    return ans;
}

console.log(majorityElement([2,2, 22, 2, 3, 3,  3 , 3, 3]));


