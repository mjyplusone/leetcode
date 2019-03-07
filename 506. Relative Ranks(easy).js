/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    var origin = nums.slice(0);
    nums.sort((num1, num2) => num2 - num1);

    var obj = {};
    var table = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    for (let i = 0; i < 3 && nums.length > i; i++) {
        obj[nums[i]] = table[i];
    }
    
    for (let i = 3; i < nums.length; i++) {
        obj[nums[i]] = i + 1 + '';
    }
    
    var res = [];
    for (let i = 0; i < origin.length; i++) {
        res.push(obj[origin[i]]);
    }
    return res;
};