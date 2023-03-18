


// 遍历
var levelOrder1 = function(root, level) {
    
    if (!root) return []


    let res = []

    let q = [root]
    while (q.length) {
        res.push([])
        let len = q.length
        for (let i = 1; i <= len; i++) {
            const item = q.shift()
            res[res.length-1].push(item.val)

            item.left && q.push(item.left)
            item.right && q.push(item.right)
        }
    }
 
    return res;
};
 
// dfs

var levelOrder1 = function(root) {
    const res = []
     var dfs = function(root, level=0) {
    
        if (!root) {
            // console.log('>>> 123');
            // res.length && stack.push(res[res.length-1])
            return []
        }
    
    
    
        if (level >= res.length){
            res.push([])
        }
        res[level].push(root.val)
    
        dfs(root.left, level+1)
        dfs(root.right, level+1)
         // stack.push(res[res.length-1])
        return res;
    };
    dfs(root)
    console.log(stack);
    return res;
};

 


const createTreeNode  = require('./create')


// https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/solution/san-chong-shi-xian-tu-jie-107er-cha-shu-de-ceng-ci/


const tree = createTreeNode([1,2,3,4,5,6, 7, 8, 9], 0)
// const tree = createTreeNode([ ], 0)
const res = []
console.log(levelOrder1(tree, res));