/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    let dis = [], res = [];
    for (let i = 0; i < points.length; i++) {
        dis[i] = [];
    }
    for (let i = 0; i < points.length; i++) {
        dis[i][0] = points[i][0] * points[i][0] + points[i][1] * points[i][1];
        dis[i][1] = i;
    }
    dis.sort((val1, val2) => {
        return val1[0] - val2[0];
    });
    for (let i = 0; i < K; i++) {
        res.push(points[dis[i][1]]);
    }
    return res;
};