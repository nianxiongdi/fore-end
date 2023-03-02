




a = 5;
b = 6





xor = a^b


mask = 1

let _a = 0
let _b = 0
if ((mask && xor) === 0){
    mask = mask << 1
}


if (a & mask === 0){
    _a ^=a 
}else {
    _b ^=b
}

console.log(_a, _b);


// 1的个数

// 所有位的mask

// 取出某一位

// 整数是否是 2 的幂次方












