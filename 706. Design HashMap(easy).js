/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this.hashmap = [];
    for (let i = 0; i <= 10000; i++) {
        this.hashmap[i] = -1;
    }
    this.values = [];
};

MyHashMap.prototype.hash = function(key) {
    return key % this.hashmap.length;
}

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    var pos = this.hash(key);
    if (this.hashmap[pos] === -1 || this.hashmap[pos] === key) {
        this.hashmap[pos] = key;
        this.values[pos] = value;
    } else {
        // 线性探测法
        while (this.hashmap[pos] !== -1) {
            pos++;
        }
        this.hashmap[pos] = key;
        this.values[pos] = value;
    }
    
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    var pos = this.hash(key);
    for (let i = pos; i<= 10000; i++) {
        if (this.hashmap[i] === key) {
            return this.values[i];
        }
    }
    return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    var pos = this.hash(key);
    for (let i = pos; i<= 10000; i++) {
        if (this.hashmap[i] === key) {
            this.hashmap[i] = -1;
            this.values[i] = undefined;
        }
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = Object.create(MyHashMap).createNew()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */