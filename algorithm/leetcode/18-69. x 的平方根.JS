

/**
 * 整数的版本
*/
var mySqrt1 = function(x) {
   
    let left = 0, right = x , ans = -1;

    while (left <= right) {
        
        let mid = Math.floor((left + right) / 2)

        if ((mid*mid) <=x){
          ans = mid
          left = mid + 1
        } else {
          right = mid - 1
        }
    }
    
    return ans

}



//二分法  有小数的方法
const sqrt = (x) => {
	let EPSINON = 0.00001;
	let low = 0.0;
	let high = x;
	let mid = (low + high) / 2;
	while ((high - low) > EPSINON){
		if (mid*mid > x){
			high = mid;
		}
		else{
			low = mid;
		}
		mid = (high + low) / 2;
	}
	return mid;
}

console.log(sqrt(2))
