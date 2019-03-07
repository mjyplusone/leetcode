/**
 * @param {string} s
 * @return {number}
 */
// 暴力解法
// var countBinarySubstrings = function(s) {
//     var res = [];
//     for (let i = 0; i < s.length; i++) {
//         let count0 = 0, count1 = 0;
//         let str = '';
//         for (let j = i; j < s.length; j++) {
//             s[j] === '0' ? count0++ : count1++;
//             str += s[j];
//             if (count0 === count1) {
//                 res.push(str);
//                 break;
//             }
//         }
//     }
//     return res.length;
// };


// 假设num1个连续出现的0与num2个连续出现的1相邻，则这个字符串的中子串的数量就是num1与num2的较小值
// 比如00111的子串大小就是2和3中的较小值
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    var res = [];
    var count = 1, flag = s[0];
    for (let i = 1; i < s.length; i++) {
        if (s[i] === flag) {
            count++;
        } else {
            res.push(count);
            flag = s[i];
            count = 1;
        }
    }
    res.push(count);

    var len = 0;
    for (let i = 1; i < res.length; i++) {
        len += Math.min(res[i], res[i - 1]);
    }
    
    return len;
};
