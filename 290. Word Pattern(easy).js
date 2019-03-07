/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
// 类似205
var wordPattern = function(pattern, str) {
    var arr = str.split(' ');
    if (pattern.length !== arr.length) return false;
    
    var obj = {}, map = [];
    for (let i = 0; i < pattern.length; i++) {
        // 该模式还未映射到单词
        if (!obj[pattern[i]]) {
            // 单词还未匹配模式
            if (map.indexOf(arr[i]) === -1) {
                obj[pattern[i]] = arr[i];
                map.push(arr[i]);
            } else {
                return false;
            }
        } else {
            // 该模式映射不是当前单词
            if (obj[pattern[i]] !== arr[i]) return false;
        }
    }
    return true;
};