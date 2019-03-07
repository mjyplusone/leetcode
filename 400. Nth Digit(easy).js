/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    var len = 0;
    var index = 1;
    while (1) {
        len += (index + '').length;
        console.log(len)
        if (len >= n) {
            let str = index + '';
            // console.log(len)
            // console.log(n)
            // console.log(str)
            return str[str.length - 1 - (len - n)];
        }
        index++;
    }
};

findNthDigit(2147483647)