/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    var res = 0;
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let k = j + 1; k < points.length; k++) {
                res = Math.max(res, area(points[i], points[j], points[k]));
            }
        }
    }
    return res;
};

function area(p1, p2, p3) {
    return Math.abs((p1[0] * p2[1] + p2[0] * p3[1] + p3[0] * p1[1] - p1[1] * p2[0] - p2[1] * p3[0] - p3[1] * p1[0])) * 0.5;
}