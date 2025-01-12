/*
    数组 转化为 树状结构
*/

let arr = [
    {id: 1, title: 'title1', pid: 0},
    {id: 2, title: 'title2', pid: 0},
    {id: 3, title: 'title2-1', pid: 2},
    {id: 4, title: 'title3-1', pid: 3},
    {id: 5, title: 'title4-1', pid: 4},
    {id: 6, title: 'title2-2', pid: 2}
]



function arr2tree(arr) {
    // 存储节点及其父节点
    const parentHash = {};
    // 存储节点及其子节点数组
    const childHash = {};

    for (let item of arr) {
        // 填充父节点哈希表
        const { id, pid } = item;
        parentHash[id] = pid;

        // 填充子节点数组哈希
        if (!childHash[pid]) {
            childHash[pid] = [];
        }
        childHash[pid].push(id);
    }

    // rootId 是树的根节点 id
    let rootId = arr[0].id;
    while (parentHash[rootId] !== undefined) {
        rootId = parentHash[rootId];
    }
    
    return hash2Tree(childHash, rootId);
    
    // 通过递归函数把哈希结构变换为树形结构
    function hash2Tree(hash, id) {
        const result = { id: id };
        if (hash[id] && hash[id].length > 0) {
            result.children = hash[id].map((cid) => hash2Tree(hash, cid));
        }
        return result;
    }
}

 

console.log(JSON.stringify(arr2tree(arr),null, 2));
