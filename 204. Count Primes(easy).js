/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) count++;
    }
    return count;
};

function isPrime(num) {
    if (num < 2) return false;
    
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
    }
    return true;
}