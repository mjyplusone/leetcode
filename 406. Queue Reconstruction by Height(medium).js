/**
 * @param {number[][]} people
 * @return {number[][]}
 */
// 首先给队排序，身高高的排前面，如果身高相同，则第二个数小的排前面
// 然后新建一个空数组，遍历之前排序的数组，根据每个元素的第二个数字，将其插入到res数组中对应的位置
var reconstructQueue = function(people) {
    if (people.length === 0) return [];
    
    people.sort((val1, val2) => {
        if (val1[0] === val2[0]) {
            return val1[1] - val2[1];
        } else {
            return val2[0] - val1[0];
        }
    });
    
    var res = [];
    res.push(people[0]);
    for (let i = 1; i < people.length; i++) {
        if (people[i][0] < res[res.length - 1][0]) {
            res.splice(people[i][1], 0, people[i]);
        } else {
            res.push(people[i]);
        }
    }
    return res;
};