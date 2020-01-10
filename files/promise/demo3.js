
/*
    回调形式
    https://www.ituring.com.cn/article/120765
*/

function Promise(fn) {
    var state = 'pending';
    var value;
    var deferred;
  
    function resolve(newValue) {
      value = newValue;
      state = 'resolved';
  
      if(deferred) {
        handle(deferred);
      }
    }
    
    //handler 对象保存了 onResolved() 回调函数和 resolve() 函数的引用。
    function handle(onResolved) {
      if(state === 'pending') {
        deferred = onResolved;
        return;
      }
  
      onResolved(value);
    }
  
    this.then = function(onResolved) {
      handle(onResolved);
    };
  
    fn(resolve);
}
function doSomething() {
    return new Promise(function(resolve) {
      var value = 42;
      resolve(value);
    }).then(e=>console.log(e));
}

  
// doSomething().then(function(resolve) {
//     var val = 10;
//     resolve(val);
// });
  
doSomething()

