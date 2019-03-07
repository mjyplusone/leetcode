/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var pa = headA, pb = headB;
    
    while (headA !== null && headB !== null) {
        headA = headA.next;
        headB = headB.next;
    }
    
    var countA = 0, countB = 0;
    while (headA) {
        countA++;
        headA = headA.next;
    }
    while (headB) {
        countB++;
        headB = headB.next;
    }
    
    while (countA) {
        countA--;
        pa = pa.next;
    }
    while (countB) {
        countB--;
        pb = pb.next;
    }
    
    while (pa !== pb) {
        pa = pa.next;
        pb = pb.next;
    }
    
    return pa;
};