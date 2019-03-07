/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    var kind = Array.from(new Set(candies)).length;
    
    if (kind >= candies.length / 2) {
        return candies.length / 2;
    } else if (kind < candies.length / 2) {
        return kind;
    }
};