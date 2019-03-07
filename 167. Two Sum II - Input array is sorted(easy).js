/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var res = [];
    for (let i = 0; i < numbers.length; i++) {
        let val = numbers[i];
        numbers[i] = undefined;
        let index = numbers.indexOf(target - val);
        if (index !== -1) {
            res.push(i + 1);
            res.push(index + 1);
            return res;
        }
    }
};