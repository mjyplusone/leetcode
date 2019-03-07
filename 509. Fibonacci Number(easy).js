/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N === 0) return 0;
    else if (N === 1) return 1;
    let first = 0,  second = 1;
    let result;
    for (let i = 0; i < N - 1; i++) {
        result = first + second;
        first = second;
        second = result;
    }
    return result;
};