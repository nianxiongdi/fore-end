function majorityElement(nums) {
    let count = 0;
    let candidate = null;
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    count = 0;
    console.log(candidate, nums.length);
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }
    return count > nums.length / 2 ? candidate : null;
}

console.log(majorityElement([1,3,2,2,3,4,5,6,6 ,3,1,3,2,3,1,3,1,3,1,3,1,3,1,3,1,3, 3,3, 3,3, 3])
);