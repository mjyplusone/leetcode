// 思路：https://blog.csdn.net/huanghanqian/article/details/77141719

/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    if (buckets === 1) return 0;
    
    var num = minutesToTest / minutesToDie + 1;
    
    var sum = num, count = 1;
    while (sum < buckets) {
        count++;
        sum *= num;
    }
    
    return count;
};