/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    var res = [], val = chars[0], count = 1;
    var index = 0, i;
    for (i = 1; chars[i]; i++) {
        if (chars[i] !== val) {
            var tmp = [];
            while (count) {
                tmp.push(count % 10 + '');
                count = Math.floor(count / 10);
            }

            val = chars[i];
            count = 1;

            if (!(tmp.length === 1 && tmp[0] === '1')) {
                chars.splice(index + 1, i - index - 1, ...tmp.reverse());
                i += tmp.length - (i - index - 1);
            }

            index = i;
        } else {
            count++;
        }
    }

    var tmp = [];
    while (count) {
        tmp.push(count % 10 + '');
        count = Math.floor(count / 10);
    }
    if (!(tmp.length === 1 && tmp[0] === '1')) {
        chars.splice(index + 1, i - index - 1, ...tmp.reverse());
    }

    return chars.length;
};