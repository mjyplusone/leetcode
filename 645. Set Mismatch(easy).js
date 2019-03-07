/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    nums.sort((num1, num2) => num1 - num2);
    var res = [];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            res.push(nums[i]);
            break;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(i + 1) === -1) {
            res.push(i + 1);
            break;
        }
    }
    return res;
};