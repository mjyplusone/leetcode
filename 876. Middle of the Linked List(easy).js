/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {    
    if (head === null) return null;
    
    var len = 1;
    var p = head;
    while(p.next) {
        p = p.next;
        len++;
    }
    
    p = head;
    for (let i = 0; i < Math.ceil((1 + len) / 2) - 1; i++) {
        p = p.next;
    }
    
    return p;
};