/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    var sortnums = nums.slice(0);
    sortnums.sort((num1, num2) => num1 - num2);
    
    var res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== sortnums[i]) {
            res.push(i);
        }
    }
    
    if (res.length === 0) return 0;
    else return res[res.length - 1] - res[0] + 1;
};