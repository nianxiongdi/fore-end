function addBinaryFractions(a, b) {
    // 找到小数点的位置
    const pointA = a.indexOf('.');
    const pointB = b.indexOf('.');

    // 确定小数部分的长度，如果不一样则补齐到相同的长度
    const maxLength = Math.max(a.length - pointA - 1, b.length - pointB - 1);
    while ((a.length - pointA - 1) < maxLength) {
        a += '0';
    }
    while ((b.length - pointB - 1) < maxLength) {
        b += '0';
    }

    // 倒序遍历二进制小数，逐位相加
    let sum = '';
    let carry = 0;
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] === '.') {
            sum = '.' + sum; // 处理小数点
            continue;
        }

        const bitA = parseInt(a[i]);
        const bitB = parseInt(b[i]);

        const bitSum = bitA + bitB + carry;
        sum = (bitSum % 2) + sum;
        carry = Math.floor(bitSum / 2);
    }

    // 如果最高位还有进位，加到结果的最前面
    if (carry !== 0) {
        sum = carry + sum;
    }

    return sum;
}

// 示例用法
let a = '0.0001100110011001100110011001100110011001100110011001101';
let b = '0.001100110011001100110011001100110011001100110011001101';
let result = addBinaryFractions(a, b);
console.log(result); // 输出两个二进制小数相加的结果
