/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    s = s.replace(/\s+/g, ' ');
    s = s.trim();
    if (s.length === 0) return 0;
    return s.split(' ').length;
};