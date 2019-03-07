/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    var obj = {};
    for (let i = 0; i < deck.length; i++) {
        if (obj[deck[i]] !== undefined) {
            obj[deck[i]]++;
        } else {
            obj[deck[i]] = 1;
        }
    }
    
    var g, flag = false;
    for (var key in obj) {
        if (!flag) {
            g = obj[key];
            flag = true;
        } else {
            g = gcd(g, obj[key]);
        }
    }
    
    return g >= 2;
};


function gcd(x, y) {
    var max = Math.max(x, y);
    var min = Math.min(x, y);
    
    if (max % min === 0) {
        return min;
    } else {
        return gcd(min, max % min)
    }
}