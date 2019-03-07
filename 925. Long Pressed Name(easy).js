/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    var name = name.split('');
    var typed = typed.split('');
    while (name.length && typed.length) {
        let val = name[0];
        let len1 = 0;
        while (name[0] === val) {
            name.shift();
            len1++;
        }
        
        let len2 = 0;
        while (typed[0] === val) {
            typed.shift();
            len2++;
        }
        
        if (len2 < len1) return false;
    }
    
    if (name.length === 0 && typed.length === 0) return true
    else return false;
};