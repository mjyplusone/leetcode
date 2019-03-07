/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.hashset = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    var index = this.hashset.indexOf(key);
    if (index === -1) this.hashset.push(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    var index = this.hashset.indexOf(key);
    if (index !== -1) {
        this.hashset.splice(index, 1);
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.hashset.indexOf(key) !== -1;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = Object.create(MyHashSet).createNew()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */