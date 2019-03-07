/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 类似290
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    var obj = {}, map = [];
    for(let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
            if (map.indexOf(t[i]) === -1) {
                obj[s[i]] = t[i];
                map.push(t[i]);
            } else {
                return false;
            }
        } else {
            if (obj[s[i]] !== t[i]) return false;
        }
    }
    return true;
};