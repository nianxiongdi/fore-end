/*
    数组 转化为 树状结构
*/

// let arr = [
//     {id: 1, name: 'title1', pid: 0},
//     {id: 2, name: 'title2', pid: 0},
//     {id: 3, name: 'title2-1', pid: 2},
//     {id: 4, name: 'title3-1', pid: 3},
//     {id: 5, name: 'title4-1', pid: 4},
//     {id: 6, name: 'title2-2', pid: 2}
// ]

const arr = [
    { id: 1, name: '部门A', pid: 0 },
    { id: 1, name: '部门A', pid: 0 },
    { id: 3, name: '部门C', pid: 1 },
    { id: 4, name: '部门D', pid: 1 },
    { id: 5, name: '部门E', pid: 0 },
    { id: 6, name: '部门F', pid: 3 },
    { id: 7, name: '部门G', pid: 0 },
    { id: 8, name: '部门H', pid: 4 }
  ];
   
/**
 * 数组转树形结构
 * @param {array} list 被转换的数组
 * @param {number|string} root 根节点（最外层节点）
 * @returns array
 */
function arrayToTree(list, root) {
  const result = [] // 用于存放结果
  const map = {} // 用于存放 list 下的节点

  // 遍历 list
  for (const item of list) {
    // 1. 获取节点的 id 和 父 id
    const { id, pid } = item // ES6 解构赋值

    // 2. 将节点存入 map
    if (!map[id]) map[id] = {}

    // 3. 根据 id，将节点与之前存入的子节点合并
    map[id] = map[id].children
      ? { ...item, children: map[id].children }
      : { ...item }

    // 4. 如果是根节点，存入 result
    if (pid === root) {
      result.push(map[id])
    } else {
      // 5. 反之，存入父节点
      if (!map[pid]) map[pid] = {}
      if (!map[pid].children) map[pid].children = []
      map[pid].children.push(map[id])
    }
  }

  // 将结果返回
  return result
}


console.log(arrayToTree(arr, 0)
);
  

  // https://fe.ecool.fun/articles/technology/380