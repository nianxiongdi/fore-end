var CryptoJS = require("crypto-js");//replace thie with script tag in browser env

//encrypt
var rawStr = "Man";

// https://segmentfault.com/q/1010000007847667
const latin1Str = unescape(encodeURIComponent(rawStr))
var latin1StrLength = latin1Str.length;

const _map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
// Convert
var words = [];
// 每4字节为一个输入值
for (var i = 0; i < latin1StrLength; i++) {
    words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
}
const sigBytes = latin1StrLength

function raw(wordArray, sigBytes) {
    // Shortcuts
    var words = wordArray;
    var sigBytes = sigBytes;

    // Convert
    var latin1Chars = [];
    for (var i = 0; i < sigBytes; i++) {
        var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
        latin1Chars.push(String.fromCharCode(bite));
    }

    return latin1Chars.join('');
}

 /**
 * Removes insignificant bits.
 *
 * @example
 *
 *     wordArray.clamp();
 */
function clamp(words, sigBytes) {
    // Shortcuts
    // var words = this.words;
    // var sigBytes = this.sigBytes;

    // Clamp
    words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
    words.length = Math.ceil(sigBytes / 4);
}


function create(words=[], sigBytes) {

    if (sigBytes != undefined) {
        sigBytes = sigBytes;
    } else {
        sigBytes = words.length * 4;
    }
    return sigBytes
}
/**
 * Converts a word array to a Base64 string.
 *
 * @param {WordArray} wordArray The word array.
 *
 * @return {string} The Base64 string.
 *
 * @static
 *
 * @example
 *
 *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
 */
// 编码
function stringify(wordArray, sigBytes) {
    // Shortcuts
    var words = wordArray;
    var sigBytes = sigBytes;
    var map = _map;
    // console.log(wordArray)
    // Clamp excess bits 处理多余的位数
    clamp(wordArray, sigBytes);

    // Convert
    var base64Chars = [];
    for (var i = 0; i < sigBytes; i += 3) {
        // 取出前面8位
        var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
        // 取出中间8位
        var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
        // 取出最后8位
        var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

        var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

        for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
            // 每6位取一个数
            base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
        }
    }

    // Add padding 补=
    var paddingChar = map.charAt(64);
    if (paddingChar) {
        // 每3字节组成一个
        while (base64Chars.length % 4) {
            base64Chars.push(paddingChar);
        }
    }
    // 连接
    return base64Chars.join('');
}

/**
 * Converts a Base64 string to a word array.
 *
 * @param {string} base64Str The Base64 string.
 *
 * @return {WordArray} The word array.
 *
 * @static
 *
 * @example
 *
 *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
 */
// 解码
function parse (base64Str, _map) {
    // Shortcuts
    var base64StrLength = base64Str.length;
    var map = _map;
    var reverseMap = {};

    for (var j = 0; j < map.length; j++) {
        reverseMap[map.charCodeAt(j)] = j;
    }

    // Ignore padding
    var paddingChar = map.charAt(64);
    if (paddingChar) {
        var paddingIndex = base64Str.indexOf(paddingChar);
        if (paddingIndex !== -1) {
            base64StrLength = paddingIndex;
        }
    }

    // Convert
    return parseLoop(base64Str, base64StrLength, reverseMap);

}

function parseLoop(base64Str, base64StrLength, reverseMap) {
    var words = [];
    var nBytes = 0;
    for (var i = 0; i < base64StrLength; i++) {
        if (i % 4) {
            var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
            var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
            var bitsCombined = bits1 | bits2;
            words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
            nBytes++;
        }
    }
    // console.log(nBytes)
    return raw(words, create(words, nBytes))
}

// var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
// 编码
var base64 = stringify(words, sigBytes);

// console.log('encrypted:', parse(base64, _map));
// console.log(CryptoJS.enc.Base64.stringify(base64))

// 解码
console.log(parse(base64, _map))
//  base64.parse(base64)