


/**
 *  原文：Hello
 *  加密后：Jhpqu
 *  解密后：Hello
*/


// 加密与解密
function caesar(str, offset = 2) {
    let char = ''
    let new_str = ''
    for (let i=0; i<str.length; i++) {
        char = str.charCodeAt(i)
        if (/[A-Z]/.test(str[i])) { // A - 65 a-97
            char = (str.charCodeAt(i) - 64 + (i* (offset>0 ? 1: -1)) + offset) % 26 + 64
        }else if (/[a-z]/.test(str[i])) {
            char = (str.charCodeAt(i) - 96 + (i* (offset>0 ? 1: -1)) + offset) % 26 + 96
        }
        new_str += String.fromCharCode(char)
    }
    

    return new_str
}


console.log('>>> 凯撒密码加密', caesar('Hello', 2)) // Jhpqu
console.log('>>> 凯撒密码解密', caesar('Jgnnq', -2)) // Hdjik
