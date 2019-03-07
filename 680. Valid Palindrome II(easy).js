/**
 * @param {string} s
 * @return {boolean}
 */
// 从两头开始搜索，如果两头的字符不一致，则需要删除前者或者后者，完成删除后判断剩余字符串是否为回文
var validPalindrome = function(s) {
    for (let i = 0, j = s.length - 1; i < Math.floor(s.length / 2); i++, j--) {
        if (s[i] !== s[j]) {
            let s1 = s.slice(0, i).concat(s.slice(i + 1));
            let s2 = s.slice(0, j).concat(s.slice(j + 1));
            return isPalindrome(s1) || isPalindrome(s2);
        }
    }
    return true;
};

function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}