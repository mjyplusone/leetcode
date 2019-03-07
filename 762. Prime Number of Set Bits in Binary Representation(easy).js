/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
    var res = 0;
    for (let i = L; i <= R; i++) {
        let num = i.toString(2);
        let count = 0;
        for (let j = 0; j < num.length; j++) {
            if (num[j] === '1') count++;
        }
        if (isPrime(count)) res++;
    }
    return res;
};

function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) return false;
    }
    return true;
}