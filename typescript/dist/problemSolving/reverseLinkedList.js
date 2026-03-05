"use strict";
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
reverseList(head);
{
    let i = head, temp = head;
    let j = head.next;
    while (j.next) {
        temp = i;
        i = i.next;
        j.next = temp;
        j = j.next;
    }
    j.next = null;
    return j;
}
