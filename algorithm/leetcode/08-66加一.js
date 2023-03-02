/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let reverseDigits = digits.reverse()
    let flag = 1
    for (let i=0; i<reverseDigits.length; i++){
        let res = reverseDigits[i] + flag
        reverseDigits[i] = res % 10
        flag = res >= 10 ? 1 : 0
    }

    if (flag) {
        reverseDigits[digits.length] = 1
    }

    return reverseDigits.reverse()
};


var plusOne = function(digits) {
    const n = digits.length;
    for (let i = n - 1; i >= 0; --i) {
        if (digits[i] !== 9) {
            ++digits[i];
            for (let j = i + 1; j < n; ++j) {
                digits[j] = 0;
            }
            return digits;
        }
    }

    // digits 中所有的元素均为 9
    const ans = new Array(n + 1).fill(0);
    ans[0] = 1;
    return ans;
};

var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] = digits[i] % 10;
        if (digits[i] != 0) {
            return digits;
        }
    }
    digits.unshift(1);
    return digits
};


plusOne([1, 9, 9])
