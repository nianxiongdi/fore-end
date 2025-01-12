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
 * @param {number|string} root 根节点（最外层节点）的 id
 * @return array
 */
function arrayToTree(list, root) {
  const result = [] // 用于存放结果
  const map = {} // 用于存放 list 下的节点

  // 1. 遍历 list，将 list 下的所有节点以 id 作为索引存入 map
  for (const item of list) {
    map[item.id] = { ...item } // 浅拷贝
  }


  // 如果root不存在，进行查找root
  if (typeof root !== 'number') {
    root = list[0].id;
    // 两种方式 一种是判断是id为 undefined 另一种是子查询
    while(map[root]?.pid !== undefined) {
      root = map[root].pid
    }
  }
  
  // 2. 再次遍历，将根节点放入最外层，子节点放入父节点
  for (const item of list) {
    // 3. 获取节点的 id 和 父 id
    const { id, pid } = item // ES6 解构赋值
    // 4. 如果是根节点，存入 result
    if (item.pid === root) {
      result.push(map[id])
    } else {
      // 5. 反之，存入到父节点
      map[pid].children
        ? map[pid].children.push(map[id])
        : (map[pid].children = [map[id]])
    }
  }

  // 将结果返回
  return result
}


console.log(arrayToTree(arr));
