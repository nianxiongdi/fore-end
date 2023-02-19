







let arr = [
    {id: 1, title: 'title1', pid: 0},
    {id: 2, title: 'title2', pid: 0},
    {id: 3, title: 'title2-1', pid: 2},
    {id: 4, title: 'title3-1', pid: 3},
    {id: 5, title: 'title4-1', pid: 4},
    {id: 6, title: 'title2-2', pid: 2}
]

function convert(list) {
    const result = []

    // 建立子节点与父节点的联系
    const map = list.reduce((pre, cur) => {
        pre[cur.id] = cur
        return pre
    }, {})

    for (let item of list) {
        if (item.pid === 0) {
            result.push(item)
            continue
        }
        // 处理子节点
        if (item.pid in map) {
            const parent = map[item.pid]
            parent.children = parent.children || []
            parent.children.push(item)
        }
    }
    return result
}

console.log((convert(arr)));
