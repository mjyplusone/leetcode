/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
    var str = [];
    
    var delta = Math.abs(A - B);
    if (A > B) {
        for (let i = 0; i < B; i++) {
            str.push('a');
            str.push('b');
        }
        A -= B;
        let index = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === 'b') {
                str.splice(i, 0, 'a');
                i++;
                A--;
                if (A === 0) break;
            }
        }
        while (A) {
            str.push('a');
            A--;
        }
    } else if (A < B) {
        for (let i = 0; i < A; i++) {
            str.push('b');
            str.push('a');
        }
        B -= A
        console.log(str)
        let index = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === 'a') {
                console.log(i);
                str.splice(i, 0, 'b');
                i++;
                console.log(str)
                B--;
                if (B === 0) break;
            }
        }
        while (B) {
            str.push('b');
            B--;
        }
    } else {
        for (let i = 0; i < A; i++) {
            str.push('a');
            str.push('b');
        } 
    }
    
    return str.join('');
};

console.log(strWithout3a3b(5,6))