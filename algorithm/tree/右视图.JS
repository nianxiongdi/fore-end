function rightSideView(root) {
    const res = [];
  
    function dfs(node, depth) {
      if (!node) return;
      if (depth === res.length) res.push(node.val);
      dfs(node.right, depth + 1);
      dfs(node.left, depth + 1);
    }
  
    dfs(root, 0);
    return res;
}
  

  
function rightSideView1(root) {
    if (!root) return [];
  
    const res = [];
    let queue = [root];
  
    while (queue.length) {
      res.push(queue[queue.length - 1].val);
      let temp = [];
      for (let node of queue) {
        if (node.left) temp.push(node.left);
        if (node.right) temp.push(node.right);
      }
      queue = temp;
    }
  
    return res;
  }
  
  

