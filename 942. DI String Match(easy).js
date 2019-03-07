// 思路：遇到I,放入当前剩余数列中的最小值;遇到D,放入当前剩余数列中的最大值。这样可以尽可能给后面的数字让出空间。
/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let res = [];
    let front = 0, behind = S.length;
    for (let i = 0; i <= S.length; i++) {
        if (S[i] === 'I') {
            res.push(front);
            front++;
        } else {
            res.push(behind);
            behind--;
        }
    }
    return res;
};