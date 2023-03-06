// https://blog.csdn.net/qq_43336755/article/details/121314244

// https://jerrymei.cn/algorithm-array-to-binary-tree/
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
  function createTreeNode(arr, index) {
    if (index > arr.length) {
      return null;
    }
    if (arr[index] == null) {
      return null;
    }
    const node = new TreeNode(arr[index]);
    node.left = createTreeNode(arr, index * 2 + 1);
    node.right = createTreeNode(arr, index * 2 + 2);
    return node;
}

function createTreeNode1(arr) {
  if (arr.length == 0) {
    return null;
  }
  const root = new TreeNode(arr[0]);
  //是否是左孩子节点
  let isLChild = true;
  //用数组的push和shift模拟队列
  const queue = [];
  queue.push(root);

  //从第二个节点开始遍历
  for (let i = 1; i < arr.length; i++) {
    //从队列中取出第一个元素
    const node = queue[0];
    if (isLChild) {
      if (arr[i] != null) {
        node.left = new TreeNode(arr[i]);
        //把 lchild 节点插入队列
        queue.push(node.lchild);
      }
      // lchild 完毕，开始处理 rchild
      isLChild = false;
    } else {
      if (arr[i] != null) {
        node.right = new TreeNode(arr[i]);
        //把 rchild 节点插入队列
        queue.push(node.right);
      }
      //rchild处理完毕，开始出队列
      queue.shift();
      isLChild = true;
    }
  }
  return root;
}

module.exports = createTreeNode
// console.log(JSON.stringify(createTreeNode([1,2,3,4,5,6], 0)
// ))
