/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    var count = 0;
    var table = ['0', '1', '5', '-1', '-1', '2', '9', '-1', '8', '6']
    for (let i = 1; i <= N; i++) {
        let nums = i + '';
        let numschange = [];
        for (let i = 0; i < nums.length; i++) {
            numschange[i] = table[nums[i]];
        }
        if (numschange.indexOf('-1') === -1 && numschange.join('') !== nums) {
            count++;
        }
    }
    return count;
};