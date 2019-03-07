/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    var res = [];
    var sq = Math.floor(Math.sqrt(area));
    for (let i = sq; i >= 1; i--) {
        if (area % i === 0) {
            res.push(area / i);
            res.push(i);
            return res;
        }
    }
};