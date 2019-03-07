/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    var time = -1;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (j === i) continue;
            for (let k = 0; k < 4; k++) {
                if (k === i || k === j) continue;
                let l = 6 - i - j - k;
                let hour = A[i] * 10 + A[j];
                let minute = A[k] * 10 + A[l];
                if (hour < 24 && minute < 60) {
                    time = Math.max(time, hour * 60 + minute);
                }
            }
        }
    }
    
    if (time === -1) return '';
    
    var res = '';
    res += padLeft(Math.floor(time / 60)) + ':' + padLeft(time % 60);
    return res;
};

function padLeft(num) {
    return '00'.slice(0, 2 - ((num + '').length)) + num; 
}