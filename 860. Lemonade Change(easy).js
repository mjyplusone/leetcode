/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    var remain5 = [], remain10 = [];
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            remain5.push(5);
        } else if (bills[i] === 10) {
            if (remain5.length >= 1) {
                remain5.pop();
            } else {
                return false;
            }
            remain10.push(10);
        } else if (bills[i] === 20) {
            if (remain5.length >= 1 && remain10.length >= 1) {
                remain5.pop();
                remain10.pop()
            } else if (remain5.length >= 3) {
                remain5.pop();
                remain5.pop();
                remain5.pop();
            } else {
                return false;
            }
        }
    }
    return true;
};