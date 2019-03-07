/**
 * @param {number} target
 * @return {number}
 */
// 假如a1到an都是正数，那么它是最好方案
// 假如存在负数，那么可以看成把a1,a2…an里面的若干个数变成负数，然后到达target
// 当a1+a2..an-target为偶数时，只需要把a1,a2,…an里面的一个数变成负数就能到达目的地，这就是最好的方案
// 当a1+a2..an-target为奇数时，有两种情况
//      当n为偶数的时候，n+1为奇数，当把a1,a2..an里面一个数变成负数之后，只要在加一个数就能到达target，也就是a1 + a2…an + an+1
//      当n为奇数的时候，可以证明当把a1,a2..an里面一个数变成负数之后只要在加两个数就能到达target，也就是a1 + a2…an + an+1 + an+2

var reachNumber = function(target) {
    target = Math.abs(target);
    
    let n = 0, sum = 0;
    while (sum < target) {
        sum += ++n;
    }
    
    if (sum === target) return n;
    if ((sum - target) % 2 === 0) return n; 
    else {
        if (n % 2 === 0) return n + 1;
        else return n + 2;
    }
};