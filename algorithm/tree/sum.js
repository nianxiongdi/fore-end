 
const createTreeNode  = require('./create')
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
 
    // 有bug
    // const tree = createTreeNode([1, 2], 0)
    // console.log(tree)
    // console.log(hasPathSum(tree, 1) )
    // function search(head, sum) {
    //     if (!head) return 0

    //     if ( sum === targetSum) {
    //          return true
    //     }else {
    //         if (head.left) return search(head.left, sum + head.left.val)
    //         if (head.right) return search(head.right.right, sum + head.right.val) 
    //         return false
    //     }
    // }

    // return search(root, 0)


    if (!root) return false
    
    if (!root.left && !root.right) {
        return root.val === targetSum
    } else {
        return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root)
    }

};


const tree = createTreeNode([1, 2], 0)
console.log(tree)
console.log(hasPathSum(tree, 1) )