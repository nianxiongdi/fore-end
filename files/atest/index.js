
var  nums = [-2,2,-3,4,-1,3,1,-5,4]
var ans = 0, maxn = -Infinity;  
var len = nums.length;
for(var i = 0; i < len; i++){  
    if(ans < 0) ans = 0;  //如果前面的和小0，那么重新开始求和
    ans += nums[i];  
    maxn = Math.max(maxn, ans);   
}  

console.log(maxn);
 



let data = {
    n:1
};
(function(data){
    console.log(data.n);
    data.n = 3;
    data = {
        n:4
    };
    console.log(data.n);
})(data);
console.log(data.n)