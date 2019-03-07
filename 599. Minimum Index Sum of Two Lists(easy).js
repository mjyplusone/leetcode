/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    var list = [], min = 2000;
    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                var tmp = [];
                tmp[0] = list1[i];
                tmp[1] = i + j;
                list.push(tmp);
                min = Math.min(min, i + j);
            }
        }
    }
    
    var res = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i][1] === min) res.push(list[i][0]);
    }
    return res;
};