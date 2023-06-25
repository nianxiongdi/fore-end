
const createTreeNode  = require('./create')
 

 const tree = createTreeNode([3], 0)
 
 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 * 广度优先遍历
 */
var maxDepth = function(root) {
    if (!root) return 0

    return Math.min(maxDepth(root.left), maxDepth(root.right)) + 1
};
 
/** 
* 深度优先遍历
*/
var maxDepth1 = function(root) {
  
    if(!root) return 0
    let queue = []
    queue.push(root)
    let ans = 0
    while(queue.length){
        let size = queue.length
        while(size > 0) {
            let node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            size--
        }
        ans++

    }

    return ans
};
console.log(maxDepth(tree)) 