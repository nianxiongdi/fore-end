
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
 * @return {boolean}
 */
// 方法1
var isSymmetric = function(root) {
    
    function same(l, r) {
 
        if (!l && !r) {
            return true
        }
        
        if (l && r) {
            return l.val === r.val && same(l.left, r.right) && same(l.right, r.left)  
        }else {
            return false
        }
    }

    return same(root.left, root.right)

};

const check = (u, v) => {
    const q = [];
    q.push(u),q.push(v);

    while (q.length) {
        u = q.shift()
        v = q.shift();

        if (!u && !v) continue;
        if ((!u || !v) || (u.val !== v.val)) return false;

        q.push(u.left); 
        q.push(v.right);

        q.push(u.right); 
        q.push(v.left);
    }
    return true;
}
// 方法2
var isSymmetric2 = function(root) {
    return check(root, root);
};

 const tree = createTreeNode([1,2,2,3,4,4,3], 0)


console.log(isSymmetric(tree))