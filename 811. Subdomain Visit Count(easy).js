/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    var obj = {};
    for (let i = 0; i < cpdomains.length; i++) {
        var num = parseInt(cpdomains[i].split(' ')[0]);
        var url = cpdomains[i].split(' ')[1];
        
        var urlframes = url.split('.');
        var val = urlframes[urlframes.length - 1];
        if (!obj[val]) {
            obj[val] = num;
        } else {
            obj[val] += num;
        }
        for (let i = urlframes.length - 2; i >=0 ;i--) {
            val = urlframes[i] + '.' + val;
            if (!obj[val]) {
                obj[val] = num;
            } else {
                obj[val] += num;
            }
        }
    }
    
    var res = [];
    for (var key in obj) {
        var str = obj[key] + ' ' + key;
        res.push(str);
    }
    
    return res;
};