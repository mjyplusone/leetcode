/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var res = new ListNode(0);
    var curr = res;
    var carry = 0;
    while (l1 || l2) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let sum = val1 + val2 + carry;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (l1) l1 = l1.next; 
        if (l2) l2 = l2.next;
        sum < 10 ? carry = 0 : carry = 1;
    }
    
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    
    return res.next;
};