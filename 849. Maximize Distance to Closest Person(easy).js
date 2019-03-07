/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {  
    var max = 0;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 0) {
            let front = Infinity, behind = Infinity;
            for (let j = i; j >= 0; j--) {
                if (seats[j] === 1) { front = i - j; break; }
            }
            for (let j = i; j < seats.length; j++) {
                if (seats[j] === 1) { behind = j - i; break; }
            }
            max = Math.max(max, Math.min(front, behind));
        }
    }
    return max;
};