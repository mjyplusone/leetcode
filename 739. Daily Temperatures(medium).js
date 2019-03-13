/**
 * @param {number[]} T
 * @return {number[]}
 */
// 递减栈Descending Stack，新建一个长度和T相等的数组res，来记录天数。遍历数组，如果栈为空，直接如栈。如果栈不为空，且当前数字大于栈顶元素，pop出栈顶元素，求出下标差，也就是升温的天数，把这个差值记录给栈顶元素在res中的位置。然后继续看新的栈顶元素，直到当前数字小于等于栈顶元素停止。然后将当前数字入栈。最后返回res。
var dailyTemperatures = function(T) {
    var res = [];
    for (let i = 0; i < T.length; i++) {
        res[i] = 0;
    }
    var stack = [];
    for (let i = 0; i < T.length; i++) {
        while (stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
            let day = stack.pop();
            res[day] = i - day;
        } 
        stack.push(i);
    }
    return res;
};