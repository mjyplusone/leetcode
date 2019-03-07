/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    var sum = 0;
    for (let i = 0; i < points.length; i++) {
        var obj = {};
        for (let j = 0; j < points.length; j++) {
            if (j === i) continue;
            if (obj[distance(points[i], points[j])]) {
                obj[distance(points[i], points[j])]++;
            } else {
                obj[distance(points[i], points[j])] = 1;
            }
        }
        for (var key in obj) {
            if (obj[key] > 1) {
                sum += obj[key] * (obj[key] - 1)
            }
        }
    }
    return sum
};

function distance(x, y) {
    return Math.abs(x[0] - y[0]) * Math.abs(x[0] - y[0]) + Math.abs(x[1] - y[1]) * Math.abs(x[1] - y[1]);
}