/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    var flag = [];
    flag[0] = true; 
    for (let i = 1; i < rooms.length; i++) flag[i] = false;
    
    var queue = [];
    for (let i = 0; i < rooms[0].length; i++) {
        queue.push(rooms[0][i]);
    }
    
    while (queue.length > 0) {
        let room = queue.shift();
        flag[room] = true;
        for (let i = 0; i < rooms[room].length; i++) {
            if (flag[rooms[room][i]]) continue;
            queue.push(rooms[room][i]);
        }
    }
    
    for (let i = 0; i < flag.length; i++) {
        if (flag[i] === false) return false;
    }
    return true;
};