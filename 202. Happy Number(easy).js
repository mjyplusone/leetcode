/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var set = [];
    var num = n;
    
    while (1) {
        let nums = (num + '').split('');
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += parseInt(nums[i]) * parseInt(nums[i]);
        }
        if (sum === 1) return true;
        if (set.indexOf(sum) !== -1) {
            return false;
        } else {
            set.push(sum);
        }
        num = sum;
    }
};