/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null) return false;
    var list = [];
    while (head) {
        if (list.indexOf(head) === -1) list.push(head);
        else return true;
        head = head.next;
    }
    return false;
};