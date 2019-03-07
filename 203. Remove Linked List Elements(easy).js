/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var p = new ListNode();
    p.next = head;
    var res = p;
    while (p && p.next) {
        if (p.next.val === val) {
            p.next = p.next.next;  
        } else {
            p = p.next;   
        }
    }
    return res.next;
};