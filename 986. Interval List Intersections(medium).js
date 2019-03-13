/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} A
 * @param {Interval[]} B
 * @return {Interval[]}
 */
// 注意interval给出的数据结构
var intervalIntersection = function(A, B) {
    var res = [];
    var i = 0, j = 0;
    while (i < A.length && j < B.length) {
        let start = Math.max(A[i].start, B[j].start);
        let end = Math.min(A[i].end, B[j].end);
        
        if (start <= end ) {
            let tmp = [];
            res.push({
                start,
                end
            });
        }
        
        if (A[i].end < B[j].end) {
            i++;
        } else {
            j++;
        }
    }
    return res;
};