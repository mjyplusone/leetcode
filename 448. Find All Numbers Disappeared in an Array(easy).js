/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let index = nums[i] - 1;
        if (nums[i] !== nums[index]) {
            let tmp;
            tmp = nums[i];
            nums[i] = nums[index];
            nums[index] = tmp;
            i--;
        }
    }

    var res = [];
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i - 1] !== i) res.push(i);
    }
    
    return res;
};
