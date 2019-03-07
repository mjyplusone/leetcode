function Node(value) {
    this.val = value;
    this.next = null;
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) return -1;
    
    var p = this.head;
    for (let i = 0; i < index; i++) {
        p = p.next;
    }
    
    return p.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    var p = this.head;
    this.head = new Node(val);
    this.head.next = p;
    this.size++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    var p = this.head;
    
    var newNode = new Node(val);
    
    if (!p) p = newNode;
    else {
        while (p.next) {
            p = p.next;
        }
        p.next = newNode;
    }
    
    this.size++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.size) return;
    
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    if (index === this.size) {
        this.addAtTail(val);
        return;
    }
    
    var p = this.head;
    for (let i = 0; i < index - 1; i++) {
        p = p.next;
    }
    
    var next = p.next;
    p.next = new Node(val);
    p.next.next = next;
    
    this.size++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) return;
    
    if (index === 0) {
        this.head = this.head.next;
        return;
    }
    
    var p = this.head;
    for (let i = 0; i < index - 1; i++) {
        p = p.next;
    }
    p.next = p.next.next;
    
    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */