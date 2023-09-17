function handleStr(s, len) {

    if (len === 0) return s
    let newStr = ''
    for (let j = 0; j < s.length;) {
        if (s.substr(j, len) === s.substr(j+len, len)) {
            sub = s.substr(j, len)
            newStr += handleStr(sub, sub.length / 2 >>> 0) // 子串是否重复 还需要递归
             // 找到重复的子串 递归
            j+=len*2
        } else {
            newStr += s[j]
            j ++
        }
    }

    return handleStr(newStr, len-1)

}
// s = "abcabca"

// s = "ababab1"

// s = "abababababab"

s = "ababaa"

console.log(handleStr(s, s.length / 2 >>> 0));   

