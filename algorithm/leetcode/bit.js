





// 两个位相同为0，相异为1
console.log(5^1);


console.log(0^0);



// a+b


function add(a, b) {
    return (a^b) +  // 累加
((a&b)<<1) // 进位
}

a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"

b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"



x = parseInt(a, 2)
y = parseInt(b, 2)
let answer,carry

/*
do {=
    answer = x ^ y
    carry = (x & y) << 1
    x = answer
    y = carry
}while(y)
console.log(answer.toString(2));

*/


// 精度问题，无法使用
// var addBinary = function(a, b) {
//     var a = '0b' + a;
//     var b = '0b' + b;
//     var sum = BigInt(a) + BigInt(b);
//     return sum.toString(2);
// };



// console.log(add(11, 9))


