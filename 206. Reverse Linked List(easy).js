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
var reverseList = function(head) {
    var prev = null;
    var p = head;
    while (p !== null) {
        var next = p.next;
        p.next = prev;
        prev = p;
        p = next;
    }
    return prev;
};