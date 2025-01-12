/*
    数组 转化为 树状结构
*/

let arr = [
    {id: 1, name: 'title1', pid: 0},
    {id: 2, name: 'title2', pid: 0},
    {id: 3, name: 'title2-1', pid: 2},
    {id: 4, name: 'title3-1', pid: 3},
    {id: 5, name: 'title4-1', pid: 4},
    {id: 6, name: 'title2-2', pid: 2}
]

// const arr = [
//     { id: 1, name: '部门A', pid: 0 },
//     { id: 1, name: '部门A', pid: 0 },
//     { id: 3, name: '部门C', pid: 1 },
//     { id: 4, name: '部门D', pid: 1 },
//     { id: 5, name: '部门E', pid: 0 },
//     { id: 6, name: '部门F', pid: 3 },
//     { id: 7, name: '部门G', pid: 0 },
//     { id: 8, name: '部门H', pid: 4 }
//   ];
   

function arr2tree(arr) {
    // 存储节点及其父节点
    const parentHash = {};
    // 存储节点及其子节点数组
    const childHash = {};

    for (let item of arr) {
        // 填充父节点哈希表
        const { id, pid, name } = item;
        parentHash[id] = {
          pid,
          name
        }

        // 填充子节点数组哈希
        if (!childHash[pid]) {
          childHash[pid] = [];
        }
        childHash[pid].push(id);
    }

    // rootId 是树的根节点 id
    let rootId = arr[0].id;
    while (parentHash[rootId]?.pid !== undefined) {
      rootId = parentHash[rootId].pid;
    }

    if (!parentHash[rootId]) {

    }    
    
    return hash2Tree(childHash, rootId);
    
    // 通过递归函数把哈希结构变换为树形结构
    function hash2Tree(hash, id) {
      const result = { id: id, name: parentHash[id]?.name, pid: parentHash[id]?.pid };
      if (hash[id] && hash[id].length > 0) {
          result.children = hash[id].map((cid) => hash2Tree(hash, cid));
      }
      return result;
    }
}



const arrToTree = (arr, tree, pid) => {
  arr.forEach((item) => {
    // 判断是否为父级菜单
    if (item.pid === pid) {
      const child = {
        ...item,
        children: [],
      };
      // 迭代 arr， 找到当前菜单相符合的所有子菜单
      arrToTree(arr, child.children, item.id);
      // 删掉不存在 children 值的属性
      if (child.children.length <= 0) {
        delete child.children;
      }
      // 加入到树中
      tree.push(child);
    }
  });
};
    

/**
 * 数组转树形结构
 * @param {array} list 被转换的数组
 * @param {number|string} root 根节点（最外层节点）
 * @returns array
 */
function arrayToTree(list, root) {
  console.log('1123132');
  
  return list
    .filter(item => item.pid === root)
    .map(item => ({ ...item, children: arrayToTree(list, item.id) }))
}

  let resTree = [] 
  console.log(arr2tree(arr, resTree, 0),null, 2);
  console.log(JSON.stringify(arrToTree(arr, resTree, 0),null, 2));
  console.log((arrayToTree(arr, 0)));
  console.log('========')

  console.log(resTree);
  

  // https://fe.ecool.fun/articles/technology/380