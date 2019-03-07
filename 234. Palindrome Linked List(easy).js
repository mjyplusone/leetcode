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
var isPalindrome = function(head) {
    var list = [];
    while (head) {
        list.push(head.val);
        head = head.next;
    }
    return list.join('') === list.reverse().join('');
};