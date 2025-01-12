

/**
 * 数据的扁平化
*/
const tree = [
    {
        "id": 1,
        "title": "title1",
        "pid": 0
    },
    {
        "id": 2,
        "title": "title2",
        "pid": 0,
        "children": [
            {
                "id": 3,
                "title": "title2-1",
                "pid": 2,
                "children": [
                    {
                        "id": 4,
                        "title": "title3-1",
                        "pid": 3,
                        "children": [
                            {
                                "id": 5,
                                "title": "title4-1",
                                "pid": 4
                            }
                        ]
                    }
                ]
            },
            {
                "id": 6,
                "title": "title2-2",
                "pid": 2
            }
        ]
    }
]


// function flatten(tree) {
//     return tree.reduce((pre, cur) => {
//         const { id, title, pid, children = [] } = cur
//         return pre.concat({ id, title, pid }, flatten(children))
//     }, [])
// }

function treeToObject(tree) {
    const result = {};
  
    function traverse(node) {
      const { id, title, pid } = node
      result[node.id] = { id, title, pid }
      ; // 保留完整的节点，包括 children
      if (node.children) {
        for (const child of node.children) {
          traverse(child); // 递归处理子节点
        }
      }
    }
  
    for (const rootNode of tree) {
      traverse(rootNode); // 处理每个根节点
    }
  
    return result;
  }
  

console.log(treeToObject(tree))