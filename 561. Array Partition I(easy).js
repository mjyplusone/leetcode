/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((num1, num2) => {
        return num1 - num2;
    });
    var sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 == 0) {
            sum += nums[i];
        } 
    }
    return sum;
};