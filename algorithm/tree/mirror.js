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
 * @return {number[]}
 */
/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
// https://juejin.cn/post/7065600339751206949

const createTreeNode  = require('./create')
/**
* @param {TreeNode} root
* @return {number[]}
*/
var preorderTraversal = function(root) {
    const result = [];
    let cur = root;
    let mostRight = null;
    while(cur) {
        mostRight = cur.left;
        // 走到叶子节点的时候
        if(mostRight === null){
            result.push(cur.val);
            cur = cur.right;
        }else {
            while(mostRight.right!==null && mostRight.right !== cur) {
                // 这个while循环就是寻找最右边的节点
                mostRight = mostRight.right;
            }
            // 寻找mostRight.right是否连接着cur
            if(mostRight.right === null) {
                // 否
                mostRight.right = cur;
                // result.push(cur.val);
                cur = cur.left;
            }else if(mostRight.right === cur) { //找到链接第二次打印
                result.push(cur.val);

                // 是
                mostRight.right = null;
                cur = cur.right;
            }
        }
    }
    return result;
 }; 

const tree = createTreeNode([1,2,3,4,5,6, 7, 8, 9], 0)
// const tree = createTreeNode([1,null,2,3], 0)

console.log(tree)
console.log(preorderTraversal(JSON.parse(JSON.stringify(tree))))