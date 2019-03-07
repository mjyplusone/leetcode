/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    nums.sort((num1, num2) => num1 - num2);
    var start = nums.indexOf(val);
    var end = nums.lastIndexOf(val);
    
    if (start !== -1) nums.splice(start, end - start + 1);
    
    else return nums.length
};