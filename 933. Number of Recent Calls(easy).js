var RecentCounter = function() {
    this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.queue.push(t);
    var count = 0;
    for (let i = this.queue.length - 1; i >=0; i--) {
        if (this.queue[i] >= t - 3000) count++;
    }
    return count;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = Object.create(RecentCounter).createNew()
 * var param_1 = obj.ping(t)
 */