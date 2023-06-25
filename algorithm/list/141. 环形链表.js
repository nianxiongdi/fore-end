


 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }


// head - >1
// 头插法
ListNode.prototype.CreateListTail = function(arr) {
    const head = this
    for (let i=0; i<arr.length; i++) {
        let node = new ListNode(arr[i], null)
        node.next = head.next
        head.next = node
    }

	return head
}

const head = new ListNode('', null)

head.CreateListTail([3,2,0,-4])

console.log(
    head.next)

head.next.next.next.next = head.next
//  = tree.next
// head.next 

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let p = head
    let lists = []
    if (!p || !p.next) return false 
    let q = p.next 
    lists.push(p)
    while(q) { 
        if (lists.indexOf(q) > -1) {
            return true
        }else {
            lists.push(q)
        }
        console.log(q)
        q = q.next
    }

    return false
};


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
    if (!head)
        return false
  
    let slow = head
    let fast = head.next
  
    while (fast !== slow) {
      if (!fast || !fast.next)
        return false
  
      fast = fast.next.next
      slow = slow.next
    }
  
    return true
  
  };
  


console.log(hasCycle(head))