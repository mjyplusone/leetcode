/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    var obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++;
        } else {
            obj[nums[i]] = 1;
        }
    }
    
    var max = 0;
    var value = [];
    for (var key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            value = [];
            value.push(parseInt(key));
        } else if (obj[key] === max) {
            value.push(parseInt(key));
        }
    }
    
    var res = [];
    for (let i = 0; i < value.length; i++) {
        let first = nums.indexOf(value[i]);
        let last = nums.lastIndexOf(value[i]);
        res.push(last - first + 1);
    }
    
    return Math.min(...res);
};