/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    let max = -1
    for (let i=0; i <= Math.floor(x); i++) {
        if (i*i <= x){
            max = i;
        } else {
            break
        }
    }

    return max;
};

// 数学
var mySqrt = function(x) {
    let ans = Math.floor(Math.exp(0.5 * Math.log(x)))
    return (ans + 1) * (ans + 1) <= x ? ans + 1 : ans;
}

// 二分法
var mySqrt = function(x) {
   
    let left = 0, right = x , ans = -1;

    while (left <= right) {
        
        let mid = (left + right) / 2

        if (Math.floor(mid*mid) <=x){
          ans = Math.floor(mid*mid)
          left = mid + 1
        } else {
          right = mid - 1
        }
    }
    
    return ans

}


 

console.log(mySqrt(0));

console.log(mySqrt(4));
console.log(mySqrt(8));