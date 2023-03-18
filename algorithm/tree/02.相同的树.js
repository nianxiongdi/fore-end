/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 
    输入：p = [1,2,3], q = [1,2,3]
    输出：true


    输入：p = [1,2,1], q = [1,1,2]
    输出：false

 */
const createTreeNode  = require('./create')

var isSameTree = function(p, q) {

    if (p === q) return true

    if ((!p && q) || (p && !q)) return false

    if (p.val !== q.val) return false
    
    let isLeft = isSameTree(p.left, q.left)
    let isRight = isSameTree(p.right, q.right)

    if (!isLeft || !isRight) return false

    return true
};


const tree1 = createTreeNode([1,2,3], 0)
// const tree = createTreeNode([1,null,2,3], 0)

const tree2 = createTreeNode([1,2,3], 0)



console.log(isSameTree(tree1, tree2));