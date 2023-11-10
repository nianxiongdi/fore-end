

const createTreeNode  = require('./create')

 

function levelOrder(root) {

    let res = []
    let dfs = function(root, level = 0) {
        if (!root) return 
        

        // if (res.length === level) {
        //     res.push(root.val)
        // }

        res[level] = res[level] || []
        res[level].push(root.val)

        dfs(root.left, level + 1)
        dfs(root.right, level + 1)

        return res
    }

    return dfs(root)
}


const tree = createTreeNode([3,9,20,null,null,15,7], 0)


console.log(levelOrder(tree));