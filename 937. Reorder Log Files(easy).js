/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    var letter = [], digit = [];
    for (let i = 0; i < logs.length; i++) {
        let tmp = logs[i].split(' ');
        let words = '';
        for (let j = 1; j < tmp.length; j++) {
            words += ' ' + tmp[j];
        }
        
        let tmp2 = [];
        if (/\d/.test(words)) {
            tmp2[0] = logs[i].split(' ')[0];
            tmp2[1] = words;
            digit.push(tmp2);
        } else {
            tmp2[0] = logs[i].split(' ')[0];
            tmp2[1] = words;
            letter.push(tmp2);
        }
    }
    
    letter.sort((val1, val2) => {
        return val1[1].localeCompare(val2[1]);
    });
    
    var res = [];
    for (let i = 0; i < letter.length; i++) {
        let tmp = letter[i][0] + letter[i][1];
        res.push(tmp);
    }
    for (let i = 0; i < digit.length; i++) {
        let tmp = digit[i][0] + digit[i][1];
        res.push(tmp);
    }
    
    return res;
};
