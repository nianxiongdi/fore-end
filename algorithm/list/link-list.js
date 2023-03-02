


 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }


// head - >1
// 头插法
ListNode.prototype.createListHead = function(arr) {
    const head = this
    for (let i=0; i<arr.length; i++) {
        let node = new ListNode(arr[i], null)
        node.next = head.next
        head.next = node
    }

	return head
}

// 1. 尾插法
ListNode.prototype.CreateListTail = function(arr) {
    const head = this
    let p = head // 保持最后一个节点
    for (let i=0; i<arr.length; i++) {
        let node = new ListNode(arr[i], null)
        p.next = node
        p = node
    }
}

// 2. 尾插法
ListNode.prototype.CreateListTail = function(arr) {
    const head = this
    let p = head // 保持最后一个节点
    for (let i=0; i<arr.length; i++) {
        let node = new ListNode(arr[i], null)
        p.next = node
        p = node
    }
    return head
}


// 3. 链表长度
ListNode.prototype.length = function() {

    let cnt = 0
    let p = this.next
    while(p) {
        cnt++
        p = p.next
    }
    return cnt
}


// 4. 是否为空
ListNode.prototype.isEmpty = function() {

    return !!this.next

}

// 5. 删除某个位置的元素
ListNode.prototype.deleteByIndex = function(index) {

    const len = this.length()
    
    if (index > len || index < 1) {
        throw new Error('此位置不在链表中，无法删除!')
    }

    let p = this
    for (let i=0; i< index-1; i++) {
        p = p.next
    }

    let q = p.next // 保存删除的节点
    p.next = q.next // 删除节点
    q.next = null // 删除节点的指向清空
    return q

}

// 6. 删除元素的值
ListNode.prototype.deleteByVal = function(val) {
    let p = this // 保存头节点
    let q = this.next // 保存下一个节点
    
    while(q) {
        if (q.val === val) {
            p.next = q.next
            return true
        }
        p = q
        q = q.next
    }

    return false
}

// 7. 遍历

ListNode.prototype.list = function() {
    const head = this
    let p = head.next
    
    while(p) {
        console.log(p.val)
        p = p.next
    }

    return head
}

// 8. 中位数节点
ListNode.prototype.getMiddle = function() {
    let fast = slow = this

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    if (fast === null) { //说明链表有奇数个节点，此时slow正好是中位数
        return slow.val * 1.0
    }else { //说明链表有偶数个节点，此时(slow+slow.next)/2是中位数
        return (slow.val + slow.next.val) / 2.0
    }

}

// 9. 无头节点反序
ListNode.prototype.reverseList = function(head) {
    let next = null
    let pre = null
    
    while(head) {
        // 指向下一个节点
        next = head.next
        // 永远指向第一个元素
        head.next = pre
        pre = head
        head = next

    }
    // console.log('pp', h)
    // h.next = p
    return pre

}

// 10. 有头节点反序
ListNode.prototype.reverseList1 = function(head) {
    let p, q, pr;
    p=head.next;
    q=null;
    head.next=null;
    while(p){
        pr = p.next;
        p.next = q; // 节点改变指向
        q=p;
        p=pr;
    }
    head.next=q;

    return head;


}

// 11. 有头节点链表的合并
ListNode.prototype.merge = function (A, B) {

    let p = A.next
    let q = B.next
    let r // r始终指向C的终端节点
    let C

    C = A  // 用A的头节点来做C的头节点
    C.next = null

    r = C
    while (p && q) {
        if (p.val <= q.val) {
            r.next = p
            p = p.next
            r = r.next
        } else {
            r.next = q
            q = q.next
            r = r.next
        }
    }
    r.next = null

    if(p) r.next = p
    if(q) r.next = q

    return C
}

// 12.无头节点链表的合并
ListNode.prototype.merge1 = function (A, B) {

    let p = A
    let q = B
    let r = C = new ListNode('', null) // r始终指向C的终端节点

    while (p && q) {
        if (p.val <= q.val) {
            r.next = p
            p = p.next
            r = r.next
        } else {
            r.next = q
            q = q.next
            r = r.next
        }
    }
    r.next = null

    if(p) r.next = p
    if(q) r.next = q

    return C.next
}

// 13. 无头节点链表的合并 - 递归
ListNode.prototype.merge2 = function (A, B) {
    if (A === null) return B
    if (B === null) return A

    if (A.val < B.val) {
        A.next = this.merge2(A.next, B)
        return A
    } else {
        B.next = this.merge2(A, B.next)
        return B
    }
}

// 13. 删除重复的元素

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
    输入：head = [1,1,2]
    输出：[1,2]
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 无头结点
 var deleteDuplicates = function(head) {
	let p = head;
	while(p) {
		let t = p.next || {}
		if (p.val === t.val) {
			p.next = t.next;
			t = null
		}else {
		    p = p.next
        }
	}
	return head
};;

const head = new ListNode('', null)

head.CreateListTail([1, 2, 4])


head.list()

console.log('>>> 链表长度: ', head.length())


console.log('>>> 链表是否为空: ', head.isEmpty())

// console.log('>>> 删除节点: ', head.deleteByIndex(4))

// console.log('>>> 删除节点: ', head.deleteByVal(111))
// head.list()


// console.log('>>> 中位数', head.getMiddle())


// console.log('>>> 反序', )
// head.reverseList1(head).list()


const head1 = new ListNode('', null)

head1.CreateListTail([1,3,4])


const C = head.merge(head, head1)
C.list()