/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.arr = nums.sort((num1, num2) => num2 - num1);
    this.k = k;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    var flag = false;
    for (let i = 0; i < this.arr.length; i++) {
        if (val >= this.arr[i]) {
            flag = true
            this.arr.splice(i, 0, val);
            break;
        }
    }
    if (!flag) this.arr.push(val);
    return this.arr[this.k - 1];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = Object.create(KthLargest).createNew(k, nums)
 * var param_1 = obj.add(val)
 */