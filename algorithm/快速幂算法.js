



/**
 * a^b值  时间复杂度 log(n)
 * 
 * **/
function quick_pow(a, b) {
    let temp = a,ans = 1
    while(b) {
        if (b%2) ans = ans * temp
        b = b/2 | 0
        temp = temp * temp
    }

    return ans
}

console.log(quick_pow(2, 3))


// 000000011