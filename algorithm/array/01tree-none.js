

function arr2tree(arr) {
    // 存储节点及其父节点
    const parentHash = {};
    // 存储节点及其子节点数组
    const childHash = {};

    for (let item of arr) {
        const { id, pid } = item;
        // 填充父节点哈希表
        parentHash[id] = pid;

        // 填充子节点数组哈希
        if (!childHash[pid]) {
            childHash[pid] = [];
        }
        childHash[pid].push({ id }); // 直接存储节点对象以便后续操作
    }

    // 找到根节点 id
    let rootId = arr[0].id;
    while (parentHash[rootId] !== undefined) {
        rootId = parentHash[rootId];
    }

    // 非递归构建树
    const stack = [{ id: rootId }]; // 初始化栈，存储节点对象
    const nodeMap = { [rootId]: { id: rootId } }; // 用于存储所有节点对象的引用，方便子节点关联

    while (stack.length > 0) {
        const currentNode = stack.pop();
        const currentId = currentNode.id;

        // 获取当前节点的子节点
        const children = childHash[currentId] || [];
        if (children.length > 0) {
            currentNode.children = children; // 关联子节点
        }

        // 将子节点推入栈并存储到 nodeMap 中
        for (const child of children) {
            stack.push(child);
            nodeMap[child.id] = child;
        }
    }

    return nodeMap
}

// 测试数据

let arr = [
    {id: 1, title: 'title1', pid: 0},
    {id: 2, title: 'title2', pid: 0},
    {id: 3, title: 'title2-1', pid: 2},
    {id: 4, title: 'title3-1', pid: 3},
    {id: 5, title: 'title4-1', pid: 4},
    {id: 6, title: 'title2-2', pid: 2}
]



console.log(arr2tree(arr));
