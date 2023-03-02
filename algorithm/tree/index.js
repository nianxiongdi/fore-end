/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */



function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


const tree = new TreeNode(1, new TreeNode(2, null, new TreeNode(3, null, null)), null)


/**
 * 先序遍历 - 递归
*/
var preorderTraversal = function(root) {
    let res = []
    function preOrder(root) {
        if (root) {
            res.push(root.val)
            preOrder(root.left)
            preOrder(root.right)        
        }
    }
    preOrder(root)
    return res
};

/**
 * 先序遍历 - 非递归
*/
var preorderTraversal2 = function(root) {
    if (!root) return []
    let stack = [root]
    let res = []
    while (stack.length) {
        let node = stack.pop()
        res.push(node.val)
        if (node.right) {
            stack.push(node.right)
        }

        if (node.left) {
            stack.push(node.left)
        }
    }
    return res

};


 
 console.log(preorderTraversal2(tree));